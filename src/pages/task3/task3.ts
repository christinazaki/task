import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ ReadDataProvider }from '../../providers/read-data/read-data';
import { Trips } from '../../app/entities/trips.entity';


@IonicPage()
@Component({
  selector: 'page-task3',
  templateUrl: 'task3.html',
})
export class Task3Page {
  trips : Trips[];
  id: string;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  title: string;
  date: string;
  time: string;
  address: string;
  trainerName: string;
  trainerImg: string;
  trainerInfo: string;
  occasionDetail: string;
  price: string;
  mytrip={}as Trips;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public readDataService :ReadDataProvider) {

      console.log('kkkkk');
    this.readDataService.getData().subscribe
    (data=>{
      this.trips = data
      let myJSON = JSON.stringify(this.trips);
      console.log(myJSON);
     this.id = myJSON.substr(9,3);
      this.photo1 = myJSON.substr(52,64);
      this.photo2 = myJSON.substr(121,64);
      this.photo3 = myJSON.substr(190,64);
      this.photo4 = myJSON.substr(259,64);
     this.title = myJSON.substr(25,12);
    this.date =myJSON.substr(375,10);
    this.time = myJSON.substr(386,8);
    this.address = myJSON.substr(416,23);
    this.trainerName = myJSON.substr(460,12);
    this.trainerImg = myJSON.substr(493,73);
    this.trainerInfo = myJSON.substr(587,14);
    this.occasionDetail = myJSON.substr(625,80);
    this.price = myJSON.substr(360,3);
       console.log( this.occasionDetail);// awel sora name train f 445 3anwan f 400 
       console.log(myJSON.substr(121,64));// tani sora
       console.log(myJSON.substr(190,64));// talt sora
       console.log(myJSON.substr(259,64));// rab3 sora
       console.log(this.trips);

       
      })
       // console.log(this.readDataService.getData());
       
      // let sss = JSON.stringify(this.trips)
    // let b = sss..split('\ ');
     //  console.log('vvv');
      // console.log(b);
   
  // let myJSON = JSON.stringify(this.trips);



 //let obj = JSON.parse(myJSON);
 //console.log(myJSON);
  }

  ionViewDidLoad() {
    

}
}