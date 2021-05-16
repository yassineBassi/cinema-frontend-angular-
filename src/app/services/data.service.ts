import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete' | 'upload' | 'download';
type HttpSerializer = 'json' | 'urlencoded' | 'utf8' | 'multipart' | 'raw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'http://127.0.0.1:8080';

  constructor(protected http: HttpClient) { }

  header(){
    const token = window.localStorage.getItem('token')
    return token ? {
      'Authorization': 'Bearer ' + token
    } : null;
  }

  sendGetRequest(url: string, params: any, fullUrl = false){
    return this.http.get(fullUrl ? url : this.url + url, {
      params,
      headers: {
        ...this.header()
      }
    });
  }

  sendPostRequest(url: string, data: any, fullUrl = false){
    return this.http.post(fullUrl ? url : this.url + url, data, {
      headers: {
        ...this.header()
      },
    });
  }
}
