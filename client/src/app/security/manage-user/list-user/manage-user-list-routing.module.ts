import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUserListComponent } from './manage-user-list.component';

const routes: Routes = [
  {
    path: '',
    component: ManageUserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUserListRoutingModule { }
