import { MenuItem } from './restaurant/detail/menu-item/menu-item.model';
import { ErrorHandler } from './../../app.error-handler';

import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { Http } from "@angular/http";
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { 
    
  }

  restaurants(): Observable<Restaurant[]>{
    return this.http.get(`${environment.meat_api}/restaurants`)
    .map(response=>response.json())
    .catch(ErrorHandler.handlerError);
  }
  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${environment.meat_api}/restaurants/${id}`)
    .map(response=>response.json())
    .catch(ErrorHandler.handlerError);
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${environment.meat_api}/restaurants/${id}/reviews`)
    .map(response=>response.json())
    .catch(ErrorHandler.handlerError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(`${environment.meat_api}/restaurants/${id}/menu`)
    .map(response=>response.json())
    .catch(ErrorHandler.handlerError);
  }

}
