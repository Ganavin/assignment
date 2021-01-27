import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePage1Component } from './table-page1/table-page1.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', pathMatch: 'full', component: TablePage1Component }])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
