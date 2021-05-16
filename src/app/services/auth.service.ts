import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends DataService {

  constructor(http: HttpClient) {
    super(http);
  }

  signin(data){
    return this.sendPostRequest('/auth/signin', data)
  }
}
