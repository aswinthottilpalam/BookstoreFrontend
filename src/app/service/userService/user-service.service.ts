import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {
  token: any;
  constructor(private httpService: HttpserviceService) { this.token = localStorage.getItem('token'); }

  login(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.httpService.postService('User/login', reqdata, false, header)
  }

  registration(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
    console.log(reqdata)
    return this.httpService.postService('User/register', reqdata, false, header)
  }

  forgetPassword(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
    console.log(reqdata)
    return this.httpService.postService(`User/forgotPassword/${reqdata.Email}`, reqdata, false, header)
  }


}