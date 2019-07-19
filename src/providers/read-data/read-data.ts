import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http,Response } from "@angular/http";

import { Trips } from '../../app/entities/trips.entity';
@Injectable()
export class ReadDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ReadDataProvider Provider');
  }
  getData(){
    return this.http.get<Trips[]>("https://skillzycp.com/api/UserApi/getOneOccasion/389/0")
    
   // .subscribe(data=>{ console.log(data)});
  }
}
