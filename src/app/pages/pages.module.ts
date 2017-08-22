import { OrderModule } from './order/order.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsModule } from 'app/pages/restaurants/restaurants.module';

@NgModule({
  imports: [
    CommonModule,    
    OrderModule,
    SharedModule,
    RestaurantsModule
  ],
  declarations: [HomeComponent, AboutComponent],
  exports: [RestaurantsModule, SharedModule, OrderModule]
})
export class PagesModule { }
