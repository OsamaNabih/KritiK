import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the AddBusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-business',
  templateUrl: 'add-business.html',
})
export class AddBusinessPage {
  Districts:string[];
   Form1:any;
   SubmitAttempt:any;
   Name: any;
   Telephone:any;
   Website: any;
   Street: any;
   Description: any;
   District: any;
   Proof: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.Districts = ["6th of October","Abbassiya","Agouza","Al Rehab","Desert Road","Dokki","Downtown",'El Azhar','El Sadat City','El Salam City','El Sayeda Zeinab','El Shrouk City','El taggamoa El Khames','Faisal','Garden City','Gesr El Suez','Giza','Hadayek El Ahram','Hadayek El Koba','Haram','Heliopolis','Helwan','Imbaba','Katameya','Maadi','Madinatiy','Manial','Masaken Sheraton','Mohandeseen','Mokattam','Nasr City','New Cairo','Obour','Sheikh Zayed','Shoubra','Smart Village','Zamalek']
this.Form1 = formBuilder.group({
       Name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
       Telephone: ['', Validators.compose([Validators.pattern("^[0-9]+$")])],
       Website: [''],
       Street: [''],
       Description: [''],
        Proof: [''],
    });

 }
Register()
  {
    this.SubmitAttempt = true;
      //Send to backend API 
      //Set UserID 
      var APISend=
      {
        Name: this.Name,
        Telephone:this.Telephone,
        ExternalLinks: this.Website,
        RequestText: this.Description,
        LegalProof: this.Proof,
        Street: this.Street,
        District:this.District
      }
      console.log(APISend);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBusinessPage');
  }


}
