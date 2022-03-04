import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3> {{ title }} </h3>
    <h3>The base is: <strong> {{ base }} </strong> </h3>
    <button (click)="accumulate(+base)"> + {{base}} </button>
    <span> {{numb}}</span>
    <button (click)="accumulate(-base)"> - {{base}} </button>
    `
  
})

export class CounterComponent{
    title = ' Counter app';
    numb:number=10;
     
    base:number=5;
     
    accumulate(value:number):void{
    this.numb+= value;
  
  
    }
  
    substrac(base:number):void{
     this.numb-=5;
  
    }
    
    add(base:number):void{
    this.numb +=5;
    }
}