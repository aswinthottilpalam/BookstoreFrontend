import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  token:any;
  email:any;
  password:any;
  constructor(private user: UserserviceService,private rout: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    let reqdata={
      email:this.email,
      password:this.password,
    }
    this.user.login(reqdata).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data.token);
      this.rout.navigateByUrl('/dashboard/books');
    })

  }

}
