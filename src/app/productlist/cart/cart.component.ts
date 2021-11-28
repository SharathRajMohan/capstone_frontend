import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems =  [
    // {id:1,productId:1,productName:'Test-1',qty:4,price:100},
    // {id:2,productId:2,productName:'Test-2',qty:1,price:190},
    // {id:3,productId:3,productName:'Test-3',qty:2,price:420}
  ]

  cartTotal = 0;
  constructor(private msg: MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
      
    })

    
  }

  addProductToCart(product: Product) {

    if(this.cartItems.length === 0){
      this.cartItems.push({
        productName:product.foodName,
        qty:1,
        price:product.price
      })
    } else {
      for (let index in this.cartItems) {
        if(this.cartItems[index].productId === product.id){
            this.cartItems[index].qty++
            break;
        }else {
          this.cartItems.push({
            productName:product.foodName,
            qty:1,
            price:product.price
          })
        }
      }
  

    }

    
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.qty)
    })
  }

}
