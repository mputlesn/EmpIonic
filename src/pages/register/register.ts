import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Employee} from '../../app/empClass';
import empArr from '../../app/empArr';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

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

  addEmp(name, surname, empID, empRole, empImg){
    
    var temp = empImg.replace("fakepath", " ");
    temp = temp.split(" ", 2)
    var str = temp[1];
    str = str.substring(1,str.length);
    var url = "../../assets/imgs/" + str;
    console.log(str);
    
    let empObj = new Employee(name,surname,empID,empRole, url);
    empArr.push(empObj);

    this.navCtrl.push(ProfilePage);
    console.log(empArr);
    
  }

}
