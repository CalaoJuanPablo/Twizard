import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FakeprofilePage } from '../fakeprofile/fakeprofile';
import { LoginpagePage } from '../loginpage/loginpage';
import { KumulosClient } from '../../providers/global/global'
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public kumulo: KumulosClient) {
  }

  ionViewDidLoad() {
    this.kumulo.apiKey = 'b5f478ae-c89a-49e6-add6-7133065fa007';
    this.kumulo.secretKey = 'BUttPkmTz6B6S8Miq8ZiFhPp8SqFw+zoP0Li';
    this.kumulo.setTokken();
    console.log(this.kumulo);
    console.log('ionViewDidLoad RegisterPage');
  }

  gotofp(){
    console.log(this.kumulo);
    var params = {};
    params.name = 'Prueba Bojato';
    params.email = 'mbojato@gmail.com';
    params.password = '1234';
    console.log(params);
    this.kumulo.call('createUser', params);
    console.log('Test');
    console.log('kumulosClient');
    this.navCtrl.push(FakeprofilePage);
  }

  gotologin(){
    this.navCtrl.push(LoginpagePage);
  }


}
