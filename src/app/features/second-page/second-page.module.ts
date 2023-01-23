import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page.component';


const routes: Routes = [
  {
    path: '',
    component: SecondPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ]
})
export class SecondPageModule { }
