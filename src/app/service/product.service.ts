import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  savedata(obj: any): Observable<any> {
    return this.http
      .post("http://localhost:3000/product/upload", obj)
      .pipe(map(response => response));
  }
}