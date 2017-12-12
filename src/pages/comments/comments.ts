import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
   Review = {};
   Comment:string;
   UserId:number;
   UserName:string;
   comments: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.UserId = 1;
    this.UserName = "Arkab el hawa";
    this.Review = {
        id: 1,
        name: "Omar Wagih",
        Avatar: "assets/img/ian-avatar.png",
        Review: "I had the most amazing time here, the pasta was really good, the staff were friendly, over all such an amazing experience!",
          likes: 32,
          CommentNum: 2
      };
      this.comments=
          [{
              name: "Walid Ashraf",
              Review: "Such a liar, this place sucks."
          },
          {
            name: "Osama Nabih",
              Review: "Well fuck you and fuck your opinions"
          }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }
  UpdateComments()
  {
    // send comment to API here

        this.comments.push({
         name: this.UserName,
					Review:this.Comment});
      this.Comment = "";
  }
}
