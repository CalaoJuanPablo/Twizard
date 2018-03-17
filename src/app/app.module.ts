import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginpagePage } from '../pages/loginpage/loginpage';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { FakeprofilePage } from '../pages/fakeprofile/fakeprofile';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KumulosClient } from '../providers/global/global';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { TimelinePage } from '../pages/timeline/timeline';
import { NewpostPage } from '../pages/newpost/newpost';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginpagePage,
    NewsfeedPage,
    FakeprofilePage,
    RegisterPage,
    ProfilePage,
    TabsPage,
    TimelinePage,
    NewpostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginpagePage,
    NewsfeedPage,
    FakeprofilePage,
    RegisterPage,
    ProfilePage,
    TabsPage,
    TimelinePage,
    NewpostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KumulosClient
  ]
})
export class AppModule {}
