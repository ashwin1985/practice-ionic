import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaninfoPage } from './planinfo';

@NgModule({
  declarations: [
    PlaninfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaninfoPage),
  ],
})
export class PlaninfoPageModule {}
