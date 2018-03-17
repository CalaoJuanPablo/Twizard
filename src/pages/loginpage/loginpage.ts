import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FakeprofilePage } from '../fakeprofile/fakeprofile';
import { TabsPage } from '../tabs/tabs';
import { KumulosClient } from '../../providers/global/global'

/**
 * Generated class for the LoginpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html',
})
export class LoginpagePage {

  params={}
  email: any;
  password: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public kumulo: KumulosClient) {
  }

  ionViewDidLoad() {
    this.kumulo.apiKey = 'b5f478ae-c89a-49e6-add6-7133065fa007';
    this.kumulo.secretKey = 'BUttPkmTz6B6S8Miq8ZiFhPp8SqFw+zoP0Li';
    this.kumulo.setTokken();
    console.log('ionViewDidLoad LoginpagePage');
  }

  gotofp(){
    var params= {};
    params["email"] = this.email;
    params["password"] =this.password;
    console.log(params);
    this.kumulo.call('loginUser',params);
    this.navCtrl.push(TabsPage);

  }

}
