import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Restaurant } from './../restaurant.model';
import { RestaurantsService } from './../../restaurants.service';

@Component({
  selector: 'mt-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  restaurant: Restaurant;
  constructor(private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.activatedRoute.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant);
  }

}
