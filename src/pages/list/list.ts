import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestaurantPage} from '../restaurant/restaurant';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  // send a request to the API to get type X
    items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 10; i++) {
      this.items.push( {
        id: i,
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
      } );
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
       this.items.push( {
        id: i,
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
      } );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
    ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
 openAddPage(RestId:number) {
   console.log();
    this.navCtrl.push(RestaurantPage,{
      PlaceId: RestId
    })
}
}
