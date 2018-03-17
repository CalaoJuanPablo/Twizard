import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FakeprofilePage } from '../fakeprofile/fakeprofile';
import { LoginpagePage } from '../loginpage/loginpage';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  arrDenuncias= {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  gotofp(){
      this.navCtrl.push(FakeprofilePage);
  }

  gotologin(){
    this.navCtrl.push(LoginpagePage);
  }


}