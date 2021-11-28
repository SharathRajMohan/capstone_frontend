import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin= new Admin();
  msg='';
    constructor(private service:RegistrationService,private route: Router) { }

  ngOnInit() {
  }
  loginAdmin(){
  this.service.loginAdminFromRemote(this.admin).subscribe(
    data => {console.log("response received") ;
    this.route.navigate(['/loginsuccess'])
  },
    error => {console.log("exception occured");
    this.msg="Please enter the valid Username and Password"
}
  )
}
}
