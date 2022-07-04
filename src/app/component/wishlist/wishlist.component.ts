import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishArray:any;
  userId: any;

  constructor( private bookService: BookServiceService, private router: Router ) { }

  ngOnInit(): void {
    this. getAllwishlist();
  }

  getAllwishlist() {
    // let reqdata = {
    //   userId: this.userId,
    // }
    this.bookService.getAllwishlist().subscribe((response: any) => {
      console.log(response);
      this.wishArray = response.response; 
      console.log(this.wishArray);
    });
  }


  removewishlist(wishlistId:any){
    let reqdata={
      wishListId:wishlistId
    }
    this.bookService.removewishlist(reqdata).subscribe((response: any) => {
      console.log(response);
      this. getAllwishlist();
     
    });
  }
  




}
