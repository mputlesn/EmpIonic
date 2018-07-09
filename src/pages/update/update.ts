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
  image = empArr[this.i].empImg
  
  insertImage(event: any){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.image = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
    }
  }

  update(name, surname, empID, empRole){  
    
    // console.log(empImg);
    
    // var temp = empImg.replace("fakepath", " ");
    // temp = temp.split(" ", 2)
    // var str = temp[1];
    // str = str.substring(1,str.length);
    // var url = "../../assets/imgs/" + str;

    

    let obj = new Employee(name, surname, empID, empRole, this.image)
    empArr.splice(index[0],1,obj);
     console.log(empArr);
     this.navCtrl.push(ProfilePage);
     
    
  }

}
