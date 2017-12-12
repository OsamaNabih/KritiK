import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewPage } from '../review/review';
import { CommentsPage } from '../comments/comments';
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
    UserId: number;
    PlaceId: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    try{
      console.log(navParams);
      this.UserId = 1;
      this.PlaceId = navParams.get('PlaceId'); 
       console.log(this.PlaceId);
    }
      catch(err) 
  {
      console.log(err);
  }  
    this.Stuff = "Reviews";
     this.Restaurant =
    [{
    id: 1,
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
    this.Reviews = [
      {
        id: 1,
        name: "Omar Wagih",
        Avatar: "assets/img/ian-avatar.png",
        Review: "I had the most amazing time here, the pasta was really good, the staff were friendly, over all such an amazing experience!",
          likes: 32,
          CommentNum: 2

      },
        {
        id: 1,
        name: "Omar Wagih",
        Avatar: "assets/img/ian-avatar.png",
        Review: "I had the most amazing time here, the pasta was really good, the staff were friendly, over all such an amazing experience!",
          likes: 32,
          CommentNum: 2
      },
        {
        id: 1,
        name: "Omar Wagih",
        Avatar: "assets/img/ian-avatar.png",
        Review: "I had the most amazing time here, the pasta was really good, the staff were friendly, over all such an amazing experience!",
          likes: 32,
          CommentNum: 2
      }
    ];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }
openAddPager(){
    this.navCtrl.push(ReviewPage,{
      PlaceId: this.PlaceId,
      UserId: this.UserId,
      Name: this.Restaurant[0].Name,
      Image: this.Restaurant[0].Image
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
