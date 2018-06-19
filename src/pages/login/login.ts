import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import empArr from '../../app/empArr';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  emp = empArr
  usern;
  psw;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  

  login(username, password){

    for (let index = 0; index < this.emp.length; index++) {
      this.usern = this.emp[index].usern;
      this.psw = this.emp[index].psw;
    }

    if(password == this.psw && username== this.usern)
    {
      this.navCtrl.push(ProfilePage);
    }
    else{
      alert("Incorrect username or password");
    }
  }

}
