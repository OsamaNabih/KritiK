import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
RestItems: any[];

  constructor(public navCtrl: NavController) {
    
    this.RestItems = [
      {
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Address:'24 medan el mesa7a',
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
        bestReview: `This place was amazing, they serve the most delicious crepes of all time.
        They have some REALLY AMAZING delicious stuff.`,
      },
      {
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Region:'Dokki, Giza',
        Stars: "4 stars",
        Address:'24 medan el mesa7a',
        PhoneNumber:'011554433',
        bestReview: 'This place was amazing, they serve the most delicious crepes of all time.',
      },
      {
        Restaurant: {
          avatar: 'assets/img/das.jpg',
          name: 'Crepelicious'
        },
        Address:'24 medan el mesa7a',
        Stars: "4 stars",
        PhoneNumber:'011554433',
        Region:'Dokki, Giza',
        bestReview: 'This place was amazing, they serve the most delicious crepes of all time.',
      }
    ];
  }

}
