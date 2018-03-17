import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { NewpostPage } from '../newpost/newpost';

/**
 * Generated class for the NewsfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewsfeedPage');
  // }

  tweetPrompt() {
    this.navCtrl.push(NewpostPage);
  }

}
