import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestaurantPage} from '../restaurant/restaurant';
import { ListPage } from '../list/list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
RestItems: any[];

  constructor(public navCtrl: NavController) {
    
    // This array will be filled by the backend API, in here i am going to make an API call and i will get this json in return
    this.RestItems = [
      {
        id: 1,
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
      },
      {
        id:2,
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Region:'Dokki, Giza',
        Stars: "4 stars",
        PhoneNumber:'011554433',
      },
      {
        id:3,
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
      },
      {
        id:4,
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
      },
      {
        id:5,
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
      },
      {
        id:6,
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
      }
    ];
  }
 openAddPage(RestId:number) {
   console.log();
    this.navCtrl.push(RestaurantPage,{
      PlaceId: RestId
    })
  }
   openListPage(Type:number) {
     console.log(Type);
    this.navCtrl.push(ListPage,{
      type: Type
    })
  }
}
