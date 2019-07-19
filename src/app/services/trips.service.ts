import{Observable}from'rxjs/Rx';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/th'
import{Injectable}from"@angular/core";
import { Http,Response } from "@angular/http";
import {HttpClient ,HttpResponse} from '@angular/common/http';
import { Trips } from '../entities/trips.entity';
@Injectable()

export class TripsSerivce{
    private Base_Url:string = "https://skillzycp.com/api/UserApi/getOneOccasion/389/0";
    constructor(
        private http:Http,
        private httpClient:HttpClient
    ){}
    
      
     findAll():Observable<Trips[]>{
      //  return this.httpClient.get<Trips[]>(this.Base_Url);
         return this.http.get(this.Base_Url + 'findAll')
        .map((res:Response)=>{
            return res.json();
        }) 
        .catch((err:Error)=>{
            return Observable.throw(new Error(err.message));
        }); 
    }  
  //  getPosts(): Observable<Trips[]>{
    //    return this.httpClient.get<Trips[]>(this.Base_Url);
        /* return  this.httpClient.get(this.Base_Url)
          .pipe(
                  map(res => res as Trips[] || []|| [] )
                  );    */
           /*  .pipe(
                    map((res : Response ) => res['trips'])
                    
                  );   */
        //.map(res => res as Trips[] || []|| [] );
      /*    .map((res:Response)=>{
            return res.json();
        })  */  
        /* .toPromise()
        .then(data=>{
          let res = {'results': JSON.stringify(data),
          'json': ()=>{return data;}
        };
         return res; 
        })
        .catch(error => {
          return Promise.reject(error);
        }); */
       
        
        
                // .do((res : Response ) => console.log(res.json()))
           /*    .pipe(
                    map((res : Response ) => res.json())
                  );  */
                /* .map((res : Response ) => res.json()).catch((err:Error)=>{
                    return Observable.throw(new Error(err.message));
                }); */
                
                
    //}
}