import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import empArr from '../../app/empArr';
import index from '../../app/index';
import { UpdatePage } from '../update/update';
import { RegisterPage } from '../register/register';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  emp = empArr

  addEmp(){
    this.navCtrl.push(RegisterPage);
  }  

  itemSelected(i){
    const confirm = this.alertCtrl.create({
      title: 'Options',
      message: 'Do you want to delete or update this employee?',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            this.emp.splice(i,1);
            const toast = this.toastCtrl.create({
              message: 'Employee was deleted successfully',
              duration: 3000
            });
            toast.present();
          }
        },
        {
          text: 'Update',
          handler: () => {
            index[0] = i;
            this.navCtrl.push(UpdatePage);
          }
        }
      ]
    });
    confirm.present();
  }
}
