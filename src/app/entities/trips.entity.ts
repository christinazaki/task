import { ReservTypes } from "./ReservTypes.entity"
export interface Trips{
    
    $key:string;
    id:number;
    title:string;
    img :string[];
    interest:string;
    price:number;
    date:Date;
    address:string;
    trainerName:string;
    trainerImg:string;
    trainerInfo:string;
    occasionDetail:string;
    latitude:string;
    longitude:string;
    isLiked:boolean;
    reservTypes:ReservTypes[];
  
   
}