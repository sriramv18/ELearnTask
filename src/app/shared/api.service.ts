import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }


  //GET
  getData(url)
  {
    
      return this.http.get(url);

  }
}
