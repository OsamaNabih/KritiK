import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logins',
  templateUrl: 'logins.html',
})
export class LoginsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginsPage');
  }
  GoToHome()
  {
    this.navCtrl.setRoot(HomePage)
  }
  RegisterPage()
  {
    this.navCtrl.push(RegisterPage);
  }
}
