import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})

export class ReviewPage {
UserId: number;
    PlaceId: number;
    Stars: number;
    Name:string;
    Description: string;
    Image:string;
    Review: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.UserId = navParams.get('UserId'); ;
      this.PlaceId = navParams.get('PlaceId');
      this.Name = navParams.get('Name');
      this.Image = navParams.get('Image');

  }
  AddRatings(Stars:number)
  {
      console.log(Stars);
      this.Stars= Stars;
     (<HTMLInputElement> document.getElementById("tick")).disabled = false;
  }
  Submit()
  {
    this.Description = this.Review;
    console.log(this.UserId);
    console.log(this.Description);
    console.log(this.Stars);
    console.log(this.PlaceId);
    console.log(this.Name);
    // send to API here
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

}
