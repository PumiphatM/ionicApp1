import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActionSheetsPage  } from '../action-sheets/action-sheets';
import { AlertPage  } from '../alert/alert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  actionsh(){
    this.navCtrl.push(ActionSheetsPage);
  }
  alert(){
    this.navCtrl.push(AlertPage);
  }


}
