import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoDoneItemComponent } from './todo-done-item/todo-done-item.component';
//import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import {RoutingModule} from './routing-module/routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoDoneItemComponent,
   // LoginComponent,
    TodoComponent,
   LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,RoutingModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
