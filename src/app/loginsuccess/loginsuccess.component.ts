import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  admin=new Admin();
  constructor() { }

  ngOnInit() {
  }

}
