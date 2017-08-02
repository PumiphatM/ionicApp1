import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomePage } from '../pages/home/home';
import { SlidesPage} from '../pages/slides/slides';
import { ChathomePage } from '../pages/chathome/chathome';
import { ChatPage } from '../pages/chat/chat';
import { CalendarPage } from '../pages/calendar/calendar';

var config = {
    apiKey: "AIzaSyCXbgcyi9qOwQ4gosFH06ZuRsaXwLMlG1k",
    authDomain: "ionic-chat-starter-1e53f.firebaseapp.com",
    databaseURL: "https://ionic-chat-starter-1e53f.firebaseio.com",
    projectId: "ionic-chat-starter-1e53f",
    storageBucket: "ionic-chat-starter-1e53f.appspot.com",
    messagingSenderId: "732483302252"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SlidesPage,
    ChathomePage,
    ChatPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SlidesPage,
    ChathomePage,
    ChatPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
