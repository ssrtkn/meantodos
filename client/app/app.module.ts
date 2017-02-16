import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodosComponent} from './components/todos.component';

import {TodoService} from './services/todo.service';


@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [AppComponent,TodosComponent],
  bootstrap: [AppComponent],
  providers:[TodoService]
})

export class AppModule { }
