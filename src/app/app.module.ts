import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HideHeaderDirective } from '../directives/headerscroll/headerscroll';
import { AddBusinessPage } from '../pages/add-business/add-business';
@NgModule({
  // ANY component/page/directive you make you HAVE to include it in the declarations AND up in the imports
  declarations: [
    MyApp,
    HomePage,
    HideHeaderDirective,
    AddBusinessPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  // Same here for pages (i think)
  entryComponents: [
    MyApp,
    HomePage,
    AddBusinessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
