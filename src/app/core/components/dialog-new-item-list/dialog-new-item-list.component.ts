import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
    name: string;
    option: string;
}

@Component({
    selector: 'ulc-dialog-new-item-list',
    templateUrl: './dialog-new-item-list.component.html',
    styleUrls: ['./dialog-new-item-list.component.scss']
})
export class DialogNewItemListComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DialogNewItemListComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    ngOnInit() {
        if(this.data.name.length > 0)
            this.data.option = 'edit';
        else
            this.data.option = 'add';
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
