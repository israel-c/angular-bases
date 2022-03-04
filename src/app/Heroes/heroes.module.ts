import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {Hero} from './Hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
declarations:[ListComponent,
              Hero],

exports:[ListComponent],

imports:[CommonModule]

})
export class HeroesModule{


}