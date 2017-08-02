import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';

  constructor(public db: AngularFireDatabase, 
    public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
  }

  sendMessage(){
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    })
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad ChatPage');
    }
}
