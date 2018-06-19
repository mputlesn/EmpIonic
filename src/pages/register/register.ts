import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Employee} from '../../app/empClass';
import empArr from '../../app/empArr';
import { LoginPage } from '../login/login';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  addEmp(name, surname, empID, empRole, usern, psw){
    let empObj = new Employee(name,surname,empID,empRole,usern,psw);
    empArr.push(empObj);

    this.navCtrl.push(LoginPage);
    console.log(empArr);
    
  }

}
