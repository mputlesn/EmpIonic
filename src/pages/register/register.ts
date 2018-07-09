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

  url ='http://www.dealnetcapital.com/files/2014/10/blank-profile.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  insertImage(event: any){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
    }
  }

  addEmp(name, surname, empID, empRole){
    
    // var temp = empImg.replace("fakepath", " ");
    // temp = temp.split(" ", 2)
    // var str = temp[1];
    // str = str.substring(1,str.length);
    // var url = "../../assets/imgs/" + str;
    
     console.log(this.url);
    
    let empObj = new Employee(name,surname,empID,empRole, this.url);
    empArr.push(empObj);

    this.navCtrl.push(ProfilePage);
    console.log(empArr);
    
  }

}
