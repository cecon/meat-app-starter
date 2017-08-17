import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsService } from './restaurants.service';
import { DetailComponent } from './restaurant/detail/detail.component';
import { MenuItemComponent } from './restaurant/detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant/detail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurant/detail/menu/menu.component';
import { ReviewsComponent } from './restaurant/detail/reviews/reviews.component';
import { ShoppingCartService } from './restaurant/detail/shopping-cart/shopping-cart.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [RestaurantsComponent, RestaurantComponent, MenuComponent, ShoppingCartComponent, MenuItemComponent, DetailComponent, ReviewsComponent],
  providers: [RestaurantsService, ShoppingCartService]
})
export class RestaurantsModule { }
