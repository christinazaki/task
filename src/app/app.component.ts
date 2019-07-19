import { Component } from '@angular/core';
import { Platform ,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
rootPage:any = "Task3Page";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
    ,private alertCtrl:AlertController) {
      platform.ready().then(() => {
        
      statusBar.styleDefault();
      splashScreen.hide();
    
  }); }
}

