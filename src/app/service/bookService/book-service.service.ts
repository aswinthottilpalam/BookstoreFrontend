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

  getBookById(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.getService( `Book/GetBookByBookId/${reqdata.BookId}`, true,header );
  }

  addFeedback(data: any) {
    console.log(data);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postService('Feedback/AddFeedback', data, true, header);
  }

  getfeedBack(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    console.log(reqdata);
    return this.httpService.getService( `Feedback/GetFeedback/${reqdata}`, true,header );
  }

  addToBag(data: any) {
    console.log(data);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postService(`Cart/AddCart/${data.userId}`, data,true, header);
  }


  getAllCart() {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })
    }
    return this.httpService.getService('Cart/GetCartDetailsByUserid',true,header);
  }


  deletcart(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({     
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),  
    };
    console.log(reqdata)  
    return this.httpService.deleteService( `Cart/DeleteCart/${reqdata.CartId}`,true,header );   
  }


  updateToLess(CartId:any,data: any) {
    console.log(data,CartId);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postService(`Cart/UpdateCart/${CartId}`, data,true, header);
  }


  addwishlist(data: any) {
    console.log(data);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postService('WishList/AddWishList', data,true, header);
  }


  // getAllwishlist(){
  //   this.token = localStorage.getItem('token');
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization':  'Bearer ' + this.token		
  //     })
  //   }
  //   return this.httpService.getService(`WishList/GetWishlistDetailsByUserid`,true,header)
  // }

  getAllwishlist() {
    console.log();
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.getService( 'WishList/GetWishlistDetailsByUserid', true, header );
  }


  removewishlist(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    console.log("ganya",reqdata)
    return this.httpService.deleteService( `WishList/DeleteWishList/${reqdata.wishListId}`,  true,header );
  }


}


