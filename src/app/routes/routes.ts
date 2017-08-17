import { Routes } from '@angular/router';
import { AboutComponent } from 'app/pages/about/about.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { RestaurantsComponent } from 'app/pages/restaurants/restaurants.component';
import { DetailComponent } from 'app/pages/restaurants/restaurant/detail/detail.component';
import { ReviewsComponent } from 'app/pages/restaurants/restaurant/detail/reviews/reviews.component';
import { MenuComponent } from 'app/pages/restaurants/restaurant/detail/menu/menu.component';
import { OrderComponent } from 'app/pages/order/order.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'order', component: OrderComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: DetailComponent, children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
    ]},
]