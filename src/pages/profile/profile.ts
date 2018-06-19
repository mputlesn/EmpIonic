import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import empArr from '../../app/empArr';
import { UpdatePage } from '../update/update';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  emp = empArr

delete(i){
  this.emp.splice(i,1);
}

update(i){
  this.navCtrl.push(UpdatePage);
  
}
}
