import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = environment.localUrl + 'poc-data/';
  constructor(private http: HttpClient) { }

  add(data) {
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.baseUrl, data).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error.status);
      });
    });
  }

  get(id) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.baseUrl + id).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error.status);
      });
    });
  }

  delete(id) {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(this.baseUrl + id).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error.status);
      });
    });
  }

  update(id, data) {
    return new Promise<any>((resolve, reject) => {
      this.http.put(this.baseUrl + id, data).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error.status);
      });
    });
  }

  getAll() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.baseUrl).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error.status);
      });
    });
  }
}
