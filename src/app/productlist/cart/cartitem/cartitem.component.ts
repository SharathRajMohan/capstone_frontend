import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  @Input() CartItem: any; 

  constructor() { }

  ngOnInit() {
  }

}
