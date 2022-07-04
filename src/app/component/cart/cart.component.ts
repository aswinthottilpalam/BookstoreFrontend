import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartArray: any;

  constructor( private bookService: BookServiceService, private router: Router ) { }

  ngOnInit(): void {
    this.getAllcart()
  }

  getAllcart() {
    this.bookService.getAllCart().subscribe((response: any) => {
      console.log(response);
      this.cartArray = response.response; 
      console.log(this.cartArray);
    });
  }

  removecart(cartId:any){
    let reqdata={
      CartId:cartId
    }
    this.bookService.deletcart(reqdata).subscribe((response: any) => {
      console.log(response);
     this.getAllcart()
     
    });
  }

  updateToLess(cartId:any,bookQuantity:any,bookId:any){
    let data={
      bookQuantity:(bookQuantity-1),
      bookId:bookId,
    } 
    if(bookQuantity !=1 && bookQuantity !=0  ){
    this.bookService.updateToLess(cartId,data).subscribe((response: any) => {
      console.log(response);
     this.getAllcart()
    });}
  }

  updateToAdd(CartId:any,bookQuantity:any,bookId:any){
    let data={ 
      bookQuantity:(bookQuantity+1),
      bookId:bookId,
    } 
    console.log("add")
    if(bookQuantity>=0){
    this.bookService.updateToLess(CartId,data).subscribe((response: any) => {
      console.log(response);
     this.getAllcart()
    });}
}


}
