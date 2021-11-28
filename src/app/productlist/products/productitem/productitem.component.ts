import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input() productItem: Product
  constructor(private msg: MessengerService) { }

  ngOnInit() {
    console.log(this.productItem);
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }

}
