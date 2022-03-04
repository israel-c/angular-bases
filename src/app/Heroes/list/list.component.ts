import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Input, InputDecorator, OnInit,Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  activeDiv:boolean=false;
  id:number=0;
   deleted:string=""; 
  heroes: string[]=['Sophie','Pancho','Mireya','Israel'];
 

 

 constructor(){


  

}


ngOnInit():void{
  
}

/**createRadioInput(){
  this.element=this.rederer.selectRootElement('#div1');
  let br:any;
  for(let i = 0; i < this.heroes.length; i++){
    
    this.radio.push(this.rederer.createElement("input"));
    this.rederer.setAttribute(this.radio[i],'type','radio');
    this.rederer.setAttribute(this.radio[i], 'id', i.toString());
    this.rederer.setAttribute(this.radio[i],'name','heroes');
    //this.rederer.setAttribute(this.radio[i],'#'+i.toString(),'');
    this.rederer.appendChild(this.element, this.radio[i]);
    

    this.label.push(this.rederer.createElement("label"));
    this.rederer.setAttribute(this.label[i],'for',i.toString());
    const labelText= this.rederer.createText(this.heroes[i]);
    this.rederer.appendChild(this.label[i],labelText);
    this.rederer.appendChild(this.element,this.label[i]);
    br =this.rederer.createElement('br');
    this.rederer.appendChild(this.element,br);
    
      }
  

}**/
sendId(inputR:HTMLInputElement,button:HTMLButtonElement){

if(inputR.checked){
  button.disabled=false;
  this.id=parseInt(inputR.id);
} 

//console.log(id);

}

deleteElement(button:HTMLButtonElement){
console.log(this.id);
this.activeDiv=true;
this.deleted=this.heroes[this.id]; 
this.heroes.splice(this.id,1,);

 button.disabled=true;

  
  }
  
 
 


  
 //let id =parseInt(radioB.value); 
  
 
    
  
}