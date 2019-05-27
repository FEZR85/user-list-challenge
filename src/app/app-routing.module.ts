import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '@/application/user-list/user-list.component';
import { UserListsComponent } from '@/application/user-lists/user-lists.component';

const routes: Routes = [
  {
    path: '',
    component: UserListsComponent
  },
  {
    path: 'lists/:id',
    component: UserListComponent
  },
  { path: '**', component: UserListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
