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
  show=false;
  addshow=false;
  address:any;
  value:any;
  city:any;
  state:any;
  TypeId:any;
  AddressId:any;
  AddressArray:any;
  order=false;

  constructor(private bookService: BookServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllcart()
    this.GetAddress()
  }

  getAllcart() {
    this.bookService.getAllCart().subscribe((response: any) => {
      console.log(response);
      this.cartArray = response.response;
      console.log(this.cartArray);
    });
  }

  removecart(cartId: any) {
    let reqdata = {
      CartId: cartId
    }
    this.bookService.deletcart(reqdata).subscribe((response: any) => {
      console.log(response);
      this.getAllcart()

    });
  }

  updateToLess(cartId: any, bookQuantity: any, bookId: any) {
    let data = {
      bookQuantity: (bookQuantity - 1),
      bookId: bookId,
    }
    if (bookQuantity != 1 && bookQuantity != 0) {
      this.bookService.updateToLess(cartId, data).subscribe((response: any) => {
        console.log(response);
        this.getAllcart()
      });
    }
  }

  updateToAdd(CartId: any, bookQuantity: any, bookId: any) {
    let data = {
      bookQuantity: (bookQuantity + 1),
      bookId: bookId,
    }
    console.log("add")
    if (bookQuantity >= 0) {
      this.bookService.updateToLess(CartId, data).subscribe((response: any) => {
        console.log(response);
        this.getAllcart()
      });
    }
  }

  hideAndShow(){
    console.log("calling hide")
    this.show=!this.show
  }

  addshowhide(){
    console.log("calling hide")
    this.addshow=!this.addshow
  }

  ordershow(){
    console.log("calling hide")
    this.order=!this.order
  }


  Addaddress(){
    let data={
      address:this.address,
      typeId:this.value,
      city:this.city,
      state:this.state

    }
    this.bookService.addAddress(data).subscribe(
      (response: any) => {
        console.log('Add to continues order', response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  GetAddress(){
    this.bookService.getAddress().subscribe((response: any) => {
      console.log(response);
      this.AddressArray = response.response;
      // this.TypeId = this.AddressArray[0].typeId;
      console.log(this.AddressArray);
    });
  }


  addToOrder(BookId:any,bookQuantity:any) {
    let data = {
      bookId: BookId,
      addressId:this.AddressId,
      bookQuantity:bookQuantity,
    }
    console.log(data)
    this.bookService.addToOrder(data).subscribe(
      (response: any) => {
        console.log('Add to orderlist', response);
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl('/dashboard/orderplaced');
  }



}
