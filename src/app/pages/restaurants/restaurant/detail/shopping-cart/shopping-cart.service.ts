import { CartItem } from './cart-item.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './../menu-item/menu-item.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = [];

    constructor(private http: Http) { }

    clear(){
        this.items = [];
    }

    total():number{
        return this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0);
    }

    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem)=>mItem.menuItem.id == item.id);
        if(foundItem){
            foundItem.quantity++;
        }else{
            this.items.push(new CartItem(item));
        }

    }

    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }
    
}