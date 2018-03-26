import { Component, OnInit, Input} from '@angular/core';
import { Todo } from '../classes/todo';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-todo-done-item',
  templateUrl: './todo-done-item.component.html',
  styleUrls: ['./todo-done-item.component.css']
})
export class TodoDoneItemComponent implements OnInit {

 

  @Input()
  private todo: Todo;
  done:boolean=false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  private removeTodo(): void {
    this.todoService.removeTodo(this.todo.ID); 
    console.log("This is clicked properly" + this.todo.ID);
  }

 

}
