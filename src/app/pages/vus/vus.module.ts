import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VusPageRoutingModule } from './vus-routing.module';

import { VusPage } from './vus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VusPageRoutingModule
  ],
  declarations: [VusPage]
})
export class VusPageModule {}
