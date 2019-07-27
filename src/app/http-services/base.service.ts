import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl: string = environment.localUrl;

  constructor(
    private http: HttpClient,
    private serviceName: string
    ) {
    }

  call(action: 'post' | 'get' | 'put' | 'delete', path: string = '', data?: any) {
    return new Promise<any>((resolve, reject) => {
      this.http[action](this.baseUrl + this.serviceName + '/' + path, data).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error.status);
      });
    });
  }

  post(data: any): Promise<any> {
    return this.call('post', '', data);
  }

  get(data): Promise<any> {
    return this.call('get', data);
  }

  getAll(): Promise<any> {
    return this.call('get');
  }

  delete(id): Promise<any> {
    return this.call('delete', id);
  }

  update(id, data): Promise<any> {
    return this.call('put', id, data);
  }
}
