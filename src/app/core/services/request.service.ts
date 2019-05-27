import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    public lists: Array<any>;
    public currentList: number;
    private subjectLists = new BehaviorSubject<any>([]);

    constructor() {
        this.getLists().subscribe(res=> {
            this.lists = res;
        });
    }

    addList(list): number {
        this.lists.push(list);
        this.subjectLists.next(this.lists);
        sessionStorage.setItem('lists', JSON.stringify(this.lists));
        this.currentList = this.lists.length - 1;
        sessionStorage.setItem('currentList', JSON.stringify(this.currentList));

        return this.lists.length - 1;
    }

    editListName(idList:number, name: string) {
        this.lists[idList].name = name;
        this.subjectLists.next(this.lists);
        sessionStorage.setItem('lists', JSON.stringify(this.lists));
    }

    addItemsToList(idList:number, items) {
        this.lists[idList].items = items;
        this.subjectLists.next(this.lists);
        sessionStorage.setItem('lists', JSON.stringify(this.lists));
    }

    getLists() {
        let lists = JSON.parse(sessionStorage.getItem('lists'));
        if(!lists)
            lists = [];
        this.subjectLists.next(lists);
        return this.subjectLists.asObservable();
    }

    nameCurrentList(): string {
        let currentList = JSON.parse(sessionStorage.getItem('currentList'));
        return currentList >= 0 ? this.lists[currentList].name : '';
    }

    setCurrentIdList(id: number) {
        sessionStorage.setItem('currentList', JSON.stringify(id));
        this.currentList = id;
    }

    getCurrentIdList():number {
        let currentList = JSON.parse(sessionStorage.getItem('currentList'));
        return currentList;
    }
}
