import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    Restaurant: any[];
    MenuTypes: string[];
    Stuff: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Stuff = "Reviews";
     this.Restaurant =
    [{
    Name: 'cilantro',
    Placetype: '1',
    Rating: '5',
    StreetAddress: '55 mesa7a square ',
    DescriptionText: 'a cafe to hangout and waste lots of money  ',
    Links: 'www.7bebytslm.com',
    District: "Dokki",
    Governorate: "Giza",
    NumberOfReviews: 0,
    Telephone: 118489180,
    OwnerId: null,
      Menu: 
        {
        
        Sushi: 
                [
                  {Name: 'Makai',
                   Price: 140,},
                  {Name: 'Makai',
                    Price: 140,}
                ],
        Macarooni: 
                  [
                    {Name: 'Pasta',
                      Price: 140,},
                     {Name: 'Macarooni Red',
                        Price: 140,}
                  ],
        VegetableSoup: 
                    [
                  {Name: 'Shorbet 5odar',
                   Price: 140,},
                   {Name: 'Kryptonite',
                    Price: 140,}
                    ]
        
    },
      Image: "assets/img/das.jpg"
    }];
    this.MenuTypes = Object.keys(this.Restaurant[0].Menu);
    console.log(this.MenuTypes);
    this.Reviews = [
      {
        id: 1,
        name: "Omar Wagih",
        Avatar: "assets/img/ian-avatar.png",
        Review: "I had the most amazing time here, the pasta was really good, the staff were friendly, over all such an amazing experience!",
        comments:
          [{
              name: "Walid Ashraf",
              Avatar: "assets/img/ian-avatar.png",
              Review: "Such a liar, this place sucks."
          },
          {
            name: "Osama Nabih",
              Avatar: "assets/img/ian-avatar.png",
              Review: "Well fuck you and fuck your opinions"
          }],
          likes: 32,
          CommentNum: 2

      },
        {
        id: 1,
        name: "Omar Wagih",
        Avatar: "assets/img/ian-avatar.png",
        Review: "I had the most amazing time here, the pasta was really good, the staff were friendly, over all such an amazing experience!",
        comments:
          [{
              name: "Walid Ashraf",
              Avatar: "assets/img/ian-avatar.png",
              Review: "Such a liar, this place sucks."
          },
          {
            name: "Osama Nabih",
              Avatar: "assets/img/ian-avatar.png",
              Review: "Well fuck you and fuck your opinions"
          }],
          likes: 32,
          CommentNum: 2
      },
        {
        id: 1,
        name: "Omar Wagih",
        Avatar: "assets/img/ian-avatar.png",
        Review: "I had the most amazing time here, the pasta was really good, the staff were friendly, over all such an amazing experience!",
        comments:
          [{
              name: "Walid Ashraf",
              Avatar: "assets/img/ian-avatar.png",
              Review: "Such a liar, this place sucks."
          },
          {
            name: "Osama Nabih",
              Avatar: "assets/img/ian-avatar.png",
              Review: "Well fuck you and fuck your opinions"
          }],
          likes: 32,
          CommentNum: 2
      }
    ];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

}
