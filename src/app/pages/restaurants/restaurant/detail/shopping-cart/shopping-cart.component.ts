import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.cartService.items;
  }

  total(): number {
    return this.cartService.total();
  }

  clear(): void{
    this.cartService.clear();
  }

  removeItem(item): void{
    this.cartService.removeItem(item);
  }

  addItem(item: any){
    this.cartService.addItem(item);
  }

}
