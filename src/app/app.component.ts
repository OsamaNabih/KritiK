import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginsPage } from '../pages/logins/logins';
import { AddBusinessPage } from '../pages/add-business/add-business';
import {RestaurantPage} from '../pages/restaurant/restaurant'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginsPage;
pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.pages = [
      { title: 'List', component: AddBusinessPage },
      {title: 'Restaurant', component: RestaurantPage}

    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
  openPage(page) {
  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
  this.nav.push(page.component);
}
}
