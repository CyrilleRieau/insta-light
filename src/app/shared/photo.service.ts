import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Photo } from './photo';
import {Observable} from 'rxjs';

@Injectable()
export class PhotoService {
  private urlApi:string = 'http://localhost:3000/photo';
  constructor (private http:HttpClient) {}
  
getAllPhotos():Observable<Photo[]> {
  return this.http.get<Photo[]>(this.urlApi);
};
getPhotoById(id:number):Observable<Photo>{
  return this.http.get<Photo>(this.urlApi+ '/' + id);
}
}
