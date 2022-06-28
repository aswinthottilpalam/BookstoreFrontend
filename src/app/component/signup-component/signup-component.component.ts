import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss']
})
export class SignupComponentComponent implements OnInit {

  fullName: any;
  password: any;
  email: any;
  number: any;

  constructor( private user: UserserviceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let reqdata = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      mobileNumber: this.number,
    };
    this.user.registration(reqdata).subscribe((response: any) => {
      console.log(response);
    });
  }

}
