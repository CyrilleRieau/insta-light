export class User {
    token:string;
    birthdate:string;
    mail:string;
    constructor( 
        public username:string, 
        public password:string, 
        public id?:number){}
    /*id?:number;
    username:string;
    password:string;
anciennement interface
*/    
}