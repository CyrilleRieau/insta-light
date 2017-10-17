export class Photo {
    constructor(public link:string,
         public description:string, 
         public owner:number, 
         public likes:number[]=[], 
         public id?:number){}
    /*
    id?:number;
    description:string;
    proprietaire:number;
    link:string;
    likes:number[];
anciennement interface*/    
}