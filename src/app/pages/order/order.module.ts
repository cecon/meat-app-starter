import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';

const ROUTES: Routes = [
  { path: '', component: OrderComponent }
]

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(ROUTES),
    SharedModule,
    FormsModule
  ],
  declarations: [OrderComponent],
  exports: [FormsModule]
})
export class OrderModule { }
