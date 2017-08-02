import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ChatPage } from '../chat/chat';

/**
 * Generated class for the ChathomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chathome',
  templateUrl: 'chathome.html',
})
export class ChathomePage {

  username: string = '';

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  showAlert(title: string, message: string){
    let alertbox = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['OK']
    });
      alertbox.present();
  }

  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      // all cool
      this.navCtrl.push(ChatPage, {
        username: this.username
      });
    } else {
      this.showAlert('Error', 'Invalid Username');
    }
  }

}
