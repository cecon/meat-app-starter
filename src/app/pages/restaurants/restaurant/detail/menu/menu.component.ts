import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestaurantsService } from './../../../restaurants.service';
import { MenuItem } from './../menu-item/menu-item.model';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }
}
