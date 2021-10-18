import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VusPage } from './vus.page';

const routes: Routes = [
  {
    path: '',
    component: VusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VusPageRoutingModule {}
