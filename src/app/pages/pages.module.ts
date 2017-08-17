import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsModule } from 'app/pages/restaurants/restaurants.module';

@NgModule({
  imports: [
    CommonModule,
    RestaurantsModule
  ],
  declarations: [HomeComponent, AboutComponent],
  exports: [RestaurantsModule]
})
export class PagesModule { }
