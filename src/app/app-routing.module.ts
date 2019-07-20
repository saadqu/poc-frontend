import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './poc/data/data.component';
import { AddDataComponent } from './poc/add-data/add-data.component';
import { ViewDataComponent } from './poc/view-data/view-data.component';

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
