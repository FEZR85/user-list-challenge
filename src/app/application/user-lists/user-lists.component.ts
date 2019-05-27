import { Component, OnInit } from '@angular/core';
import { RequestService } from '@services/request.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ulc-user-lists',
    templateUrl: './user-lists.component.html',
    styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {

    public lists: Array<any>;
    
    constructor(private reqService: RequestService,
        private router: Router) {
    }

    ngOnInit() {
        this.reqService.getLists().subscribe(
            res => {
                this.lists = res;
            }
        )
    }

    goToList(id) {
        this.reqService.setCurrentIdList(id);
        this.router.navigate(['lists', id]);
    }

}
