import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent

  },

  {
    path: 'secondPage',
    loadChildren: () =>
      import('../app/features/second-page/second-page.module').then((m) => m.SecondPageModule),
  },

  {path: '**', redirectTo: '../app/features/second-page/second-page.module', pathMatch: 'full'},

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
