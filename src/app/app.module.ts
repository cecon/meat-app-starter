import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { OrderModule } from './pages/order/order.module';
import { AppComponent } from './app.component'
import { LayoutModule } from 'app/layout/layout.module';
import { RoutesModule } from 'app/routes/routes.module';
import { PagesModule } from 'app/pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RoutesModule,
    PagesModule,
    OrderModule,
    HttpModule,
    SharedModule,
    RouterModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  exports: [PagesModule, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
