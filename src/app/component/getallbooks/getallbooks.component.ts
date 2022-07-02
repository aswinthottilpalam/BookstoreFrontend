import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  booksArray: any = [];
  Book: any;

  constructor(private router: Router, private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAllBooks().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      this.booksArray.reverse();
      console.log(this.booksArray);
    });
  }

  lowtohigh() {
    this.booksArray = this.booksArray.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
  }
  hightolow() {
    this.booksArray = this.booksArray.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
  }
  newestarrivals() {
    this.booksArray.reverse();
  }

  quickview(Book:any){  
    localStorage.setItem('bookId', Book.bookId); 
    this.router.navigateByUrl('dashboard/quick-view');
  }

}
