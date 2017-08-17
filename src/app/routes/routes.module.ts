import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ROUTES } from './routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule { }
