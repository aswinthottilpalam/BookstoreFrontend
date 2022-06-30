import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token:any;

  constructor( private httpService: HttpserviceService ) { this.token = localStorage.getItem('token');  }


  getAllBooks() {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })
    }
    return this.httpService.getService('Book/GetAllBook',true,header)
  }

}


