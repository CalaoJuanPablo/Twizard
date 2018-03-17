import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FakeprofilePage } from './fakeprofile';

@NgModule({
  declarations: [
    FakeprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(FakeprofilePage),
  ],
})
export class FakeprofilePageModule {}
