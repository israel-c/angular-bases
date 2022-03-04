import { Component } from "@angular/core";

@Component({
 selector:    'app-hero',
 templateUrl: 'hero.component.html'
})
export class Hero{
name: string= "Ironman";
age:number=45;

get nameToUpperCase(){
    return this.name.toUpperCase();
}
getNameAndAge():string{

    return `${this.name} - ${this.age}`;
}
changeName():void{
    this.name="Spiderman";
}
changeAge():void{
    this.age=33;
}

}