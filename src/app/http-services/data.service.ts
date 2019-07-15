import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3030/poc-data/';
  constructor(private http: HttpClient) { }

  add(data) {
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.baseUrl, data).subscribe(res => {
          console.log(res);
          resolve(res);
      });
    });
  }

  get(id) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.baseUrl + id).subscribe(res => {
          console.log(res);
          resolve(res);
      });
    });
  }

  delete(id) {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(this.baseUrl + id).subscribe(res => {
          console.log(res);
          resolve(res);
      });
    });
  }

  update(id, data) {
    return new Promise<any>((resolve, reject) => {
      this.http.put(this.baseUrl + id, data).subscribe(res => {
          console.log(res);
          resolve(res);
      });
    });
  }

  getAll() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.baseUrl).subscribe(res => {
          console.log(res);
          resolve(res);
      });
    });
  }
}
