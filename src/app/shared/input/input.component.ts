import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  input:NgModel;
  @Input() errorMessage: string;
  @Input() label: string;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterContentInit(){
    this.input = this.model;
    if(this.input === undefined)
      throw new Error("Este componente precisa ser utilizado em conjunto com uma diretiva do tipo ngModel");
  }

  hasSuccess(){
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  hasError(){
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
