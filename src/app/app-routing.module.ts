import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data/data.component';
import { AddDataComponent } from './data/add-data/add-data.component';
import { ViewDataComponent } from './data/view-data/view-data.component';

const routes: Routes = [
  {
    path: '',
    component: DataComponent
  },
  {
    path: 'add-data',
    component: AddDataComponent
  },
  {
    path: 'view-data/:id',
    component: ViewDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
