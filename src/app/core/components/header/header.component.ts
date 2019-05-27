import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Lists } from '@/application/things.model';
import { DialogListComponent } from '@cmp/dialog-list/dialog-list.component';
import { RequestService } from '@services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ulc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public mockLists: Array<Lists>;
    constructor(
        public dialog: MatDialog,
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer,
        private reqService: RequestService,
        private router: Router
    ) {
        iconRegistry.addSvgIcon(
            'logo',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/test.svg'));
        this.mockLists = [];
    }

    ngOnInit() {
    }

    openDialog(edit:boolean = false, id: number = -1): void {
        const dialogRef = this.dialog.open(DialogListComponent, {
            width: '80%',
            data: {
                option: edit ? 'edit' : 'add',
                name: edit && id > -1 ? this.mockLists[id].name : ''
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            switch(result.option) {
                case 'add':
                    let id = this.reqService.addList({name: result.name, items: []});
                    this.router.navigate(['lists', id]);
                break;
                case 'edit':
                    if(id > -1)
                        this.reqService.editListName(id, result.name);
                break;
            }
        });
    }
}
