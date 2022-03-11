import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPageComponent } from './page/detail-page/detail-page.component';
import { ListPageComponent } from './page/list-page/list-page.component';
// import { MainPageComponent } from './page/main-page/main-page.component';

export const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: ':id', component: DetailPageComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
