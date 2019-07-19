import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';


import { TripsSerivce } from './services/trips.service';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { ReadDataProvider } from '../providers/read-data/read-data';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp), 
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    TripsSerivce,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider,
    ReadDataProvider
  ]
})
export class AppModule {}
