import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import{TripsSerivce}from '../../app/services/trips.service';
import { Trips } from '../../app/entities/trips.entity';
import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-task2',
  templateUrl: 'task2.html',
})
export class Task2Page {
 trips : Trips[];
 mytrip={}as Observable<Trips[]> ;
 //Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams 
    ,private tripsService:TripsSerivce,public toastController:ToastController) {
      this.tripsService.findAll().subscribe(
      
      res => {
          this.trips = res
        },
        error => {
          this.toastController.create({
            message: error,
            position: 'middle'
           }).present(); 
        },
      ); 
  }
  
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad Task2Page');
  }

}
