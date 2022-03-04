import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//create a module called 
import { HeroesModule } from './Heroes/heroes.module';
//import { Hero } from './Heroes/Hero/hero.component';  comment out because heroes module imports hero and list component and import 
//import { ListComponent } from './Heroes/list/list.component';  //heroes module
import { CounterModule } from './Counter/counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
