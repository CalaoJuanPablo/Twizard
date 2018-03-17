import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewpostPage } from './newpost';

@NgModule({
  declarations: [
    NewpostPage,
  ],
  imports: [
    IonicPageModule.forChild(NewpostPage),
  ],
})
export class NewpostPageModule {}
