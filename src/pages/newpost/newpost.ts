import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KumulosClient } from '../../providers/global/global'
import { NewsfeedPage } from '../newsfeed/newsfeed';
/**
 * Generated class for the NewpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpost',
  templateUrl: 'newpost.html',
})
export class NewpostPage {
  paramsTweet: any;
  params={}
  constructor(public navCtrl: NavController, public navParams: NavParams, public kumulo: KumulosClient) {
  }

  ionViewDidLoad() {
    
    this.kumulo.apiKey = 'b5f478ae-c89a-49e6-add6-7133065fa007';
    this.kumulo.secretKey = 'BUttPkmTz6B6S8Miq8ZiFhPp8SqFw+zoP0Li';
    
    console.log('ionViewDidLoad NewpostPage');
  }

  newpost(){
    var params= {};
    //params["token"] = this.kumulo.getTokken();
    params["userID"] = this.kumulo.call('getProfile');
    params["post"] = this.paramsTweet;
    this.kumulo.call('createPost',params);
    console.log('Test');
    console.log(params);
    this.navCtrl.push(NewsfeedPage);

  }

}
