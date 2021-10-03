import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor( private http :HttpClient ) {  }
  getData( ){
    return this.http.get ('/api/getData')
  }
  postData( data){
    return this.http.post ('/api/postData', data )}
}

