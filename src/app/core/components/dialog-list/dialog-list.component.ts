import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogListData {
    name: string;
    option: string;
}

@Component({
  selector: 'ulc-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DialogListComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogListData) {
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
