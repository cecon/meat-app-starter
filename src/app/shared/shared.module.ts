import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputComponent, RadioComponent],
  exports: [InputComponent, RadioComponent]
})
export class SharedModule { }
