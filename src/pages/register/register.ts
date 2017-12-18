import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  Email: any;
  Password: any;
  Fname: any;
  Lname: any;
  SubmitAttempt:any;
  slideOneForm:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
        this.slideOneForm = formBuilder.group({
       Email: ['', Validators.compose([Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"), Validators.required])],
       Password: ['', Validators.compose([Validators.minLength(6), Validators.pattern("(/^(?=.*\d)(?=.*[a-z]).{6,}$/)"), Validators.required])],
       LastName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
       FirstName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  Register()
  {
    this.SubmitAttempt = true;
      //Send to backend API 
      //Set UserID 
          if(this.slideOneForm.valid){
             this.navCtrl.setRoot(HomePage);
    } 
    else{
      console.log(this.slideOneForm.valid);
    }
  }
}
