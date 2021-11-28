import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  admin=new Admin();
  msg='';
  constructor(private service:RegistrationService,private route: Router) { }

  ngOnInit() {
  }
  RegisterAdmin(){
    this.service.registerAdminFromRemote(this.admin).subscribe(
      data => {console.log("response received") ;
      this.route.navigate(['/admin-login'])
    },
      error => {console.log("exception occured");
      this.msg=error.error;
  }
    )
  }
}
