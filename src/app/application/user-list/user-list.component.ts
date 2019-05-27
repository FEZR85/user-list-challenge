import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Things } from '@/application/things.model';
import { DialogNewItemListComponent } from '@cmp/dialog-new-item-list/dialog-new-item-list.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { RequestService } from '@services/request.service';



@Component({
    selector: 'ulc-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    public mockList: Array<Things>;
    public isMobile: boolean;
    public nameList: string;

    constructor(public dialog: MatDialog,
        private reqService: RequestService,
        private deviceService: DeviceDetectorService) { 
    }

    ngOnInit() {
        this.isMobile = this.deviceService.isMobile();
        this.reqService.getLists().subscribe(res => {
            if(res[this.reqService.getCurrentIdList()])
                this.mockList = res[this.reqService.getCurrentIdList()].items;
            this.nameList = this.reqService.nameCurrentList();
        });
    }

    openDialog(edit:boolean = false, idParent: number = -1, idChild: number = -1): void {
        const dialogRef = this.dialog.open(DialogNewItemListComponent, {
            width: '80%',
            data: {
                option: edit ? 'edit' : 'add',
                name: 
                    edit && idParent > -1 && idChild == -1 ? this.mockList[idParent].name : 
                    edit && idParent > -1 && idChild > -1  ? 
                    this.mockList[idParent].children[idChild].name : ''
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            switch(result.option) {
                case 'add':
                    if(idParent > -1)
                        this.mockList[idParent].children.push({name: result.name, value: false, expand: false});
                    else
                        this.mockList.push({name: result.name, value: false, expand: false, children: []});
                break;
                case 'edit':
                    if(idParent > -1 && idChild == -1)
                        this.mockList[idParent].name = result.name;
                    else if(idParent > -1 && idChild > -1)
                        this.mockList[idParent].children[idChild].name = result.name;
                break;
            }
            this.reqService.addItemsToList(this.reqService.getCurrentIdList(), this.mockList);
        });
    }

    toggleChildren(i: number, item: Things): boolean {
        if(!item.children)
            return false;
        else
            this.mockList[i].expand = !item.expand;

        return true;
    }

    saveStatus() {
        this.reqService.addItemsToList(this.reqService.getCurrentIdList(), this.mockList);
    }
}
