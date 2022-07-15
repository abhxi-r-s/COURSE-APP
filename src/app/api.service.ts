import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }


  addcourse(course:any){

    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourses",course)
  }
}
