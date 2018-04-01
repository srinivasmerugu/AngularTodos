import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../classes/todo';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
  
})
export class TodoComponent {

  constructor(private todoService: TodoService,private router: Router,
              private route: ActivatedRoute) {
  }

   logout() {

      this.router.navigate([''], { relativeTo: this.route });
    
//    this.sample= localforage.setItem('login', 'false', function (err) {
//   // if err is non-null, we got an error
//   localforage.getItem('login', function (err, value) {

   
//     // if err is non-null, we got an error. otherwise, value is the value
//   });
// });

  }
}
