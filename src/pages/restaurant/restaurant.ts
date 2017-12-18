import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewPage } from '../review/review';
import { CommentsPage } from '../comments/comments';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
    Reviews: any[];
    Restaurant = {};
    MenuTypes: string[];
    Stuff: string;
    UserId: number;
    PlaceId: number;
    NameSt: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    try{
    
      this.UserId = 1;
      this.PlaceId = navParams.get('PlaceId');
      console.log(this.PlaceId);
       
    }
      catch(err) 
  {
      console.log(err);
  }  
    this.Stuff = "Reviews";
    this.http.get('https://lit-reef-30559.herokuapp.com/Places/' + this.PlaceId).map(res => res.json()).subscribe(data => {
       console.log(data);
        this.Restaurant  = data;
        this.Reviews = this.Restaurant['Reviews'];
        this.Restaurant['Image'] = "https://i.imgur.com/ZukEaGi.jpg"
        if(this.Restaurant['Menu'] != undefined)
        this.MenuTypes = Object.keys(this.Restaurant['Menu']);
    });
     
  }


  ionViewDidLoad() {
   
  }
openAddPager(){
    this.navCtrl.push(ReviewPage,{
      PlaceId: this.PlaceId,
      UserId: this.UserId,
      Name: this.Restaurant['Name'],
      Image: this.Restaurant['Image']
    })
}
GoComment(item:number)
{
  this.navCtrl.push(CommentsPage,{
      ReviewId: item,
      PageId: this.Restaurant[0].id
    });
}

}
