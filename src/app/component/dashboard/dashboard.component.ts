import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  Logout()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }

}
