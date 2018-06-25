import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import empArr from '../../app/empArr';
import index from '../../app/index';
import { Employee } from '../../app/empClass';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  i = index[0];
  name1 = empArr[this.i].name;
  surname2 = empArr[this.i].surname;
  id = empArr[this.i].empID;
  role = empArr[this.i].empRole;
  
  
  update(name, surname, empID, empRole, empImg){  
    
    console.log(empImg);
    
    var temp = empImg.replace("fakepath", " ");
    temp = temp.split(" ", 2)
    var str = temp[1];
    str = str.substring(1,str.length);
    var url = "../../assets/imgs/" + str;

    let obj = new Employee(name, surname, empID, empRole, url)
    empArr.splice(index[0],1,obj);
     console.log(empArr);
     this.navCtrl.push(ProfilePage);
     
    
  }

}
