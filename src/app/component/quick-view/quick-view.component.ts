import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  BookId: any;
  booksArray: any = [];
  Book: any;
  show: any;
  comment: any;
  rating: any;

  constructor(private router: Router, private bookService: BookServiceService ) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId');
    this.getBookId();
  }
  

  getBookId() {
    let reqdata = {
      BookId: this.BookId,
    };
    this.bookService.getBookById(reqdata).subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      // this.getFeedback();
      console.log(this.booksArray);
    });
  }

  hideAndShow(){
    this.show = !this.show
  }

  addBookFeedback() {
    let data = {
      rating: this.rating,
      comment: this.comment,
      bookId: this.BookId,
    };
    this.bookService.addFeedback(data).subscribe(
      (response: any) => {
        console.log('User Feedback', response);
        // this.getFeedback();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



}
