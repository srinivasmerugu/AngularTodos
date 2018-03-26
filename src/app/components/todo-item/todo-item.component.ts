import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  private removeTodo(): void {
    this.todoService.removeTodo(this.todo.ID);
    console.log("This is clicked properly" + this.todo.ID);
  }

  private updateTodo(): void {
    this.todoService.updateTodo(this.todo.ID, this.todo.Message);
    console.log("This is clicked properly" + this.todo.ID);
  }

}
