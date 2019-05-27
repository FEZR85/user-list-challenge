import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewListComponent } from './dialog-new-list.component';

describe('DialogNewListComponent', () => {
  let component: DialogNewListComponent;
  let fixture: ComponentFixture<DialogNewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
