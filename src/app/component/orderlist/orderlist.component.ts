import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {

  OrderArray:any;
  constructor( private bookService: BookServiceService ) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.bookService.GetOrder().subscribe((response: any) => {
      console.log(response);
      this.OrderArray = response.response;
      console.log("Order Array",this.OrderArray);

    });
  }

}
