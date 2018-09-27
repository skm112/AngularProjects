import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CountryDataService {
  constructor(private http: HttpClient) {}

  //---------------------------------------------------
  getdata(): Observable<any> {
    console.log("service");
    return this.http
      .get("http://localhost:3000/country/list")
      .pipe(map(response => response));
  }
  //---------------------------------------------------
  savedata(obj: any): Observable<any> {
    return this.http
      .post("http://localhost:3000/country/save", obj)
      .pipe(map(response => response));
  }

  
}
