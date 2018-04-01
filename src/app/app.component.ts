import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from './classes/todo';
import * as localforage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sample:any=false;

  constructor(private todoService: TodoService,private router: Router,
              private route: ActivatedRoute) {
  }
// samplee(data){
//   this.sample=true;

// }

ngOnInit() {
//  this.sample= localforage.getItem('login');
// console.log("", this.sample);
  }
//  logout() {
    
//    this.sample= localforage.setItem('login', 'false', function (err) {
//   // if err is non-null, we got an error
//   localforage.getItem('login', function (err, value) {

//     this.router.navigate(['login'], { relativeTo: this.route });
//     // if err is non-null, we got an error. otherwise, value is the value
//   });
// });

//   }

  login() {

//     localforage.setItem('login', 'true').then(function () {

//   return localforage.getItem('login');
// }).then(function (value) {
//   if(value){
//   this.router.navigate(['todoHome'], { relativeTo: this.route });
// console.log("asdfasdfasd",value);
//   }
//   // we got our value
// }).catch(function (err) {
//   // we got an error
//   console.log(err);
// });


this.router.navigate(['todoHome']);
localforage.setItem('login', 'true', function (err) {
  // if err is non-null, we got an error
  localforage.getItem('login', function (err, value) {
    //if (value) {
    
    // if err is non-null, we got an error. otherwise, value is the value
  });
});
    
    //this._service.setLogin();
    // this.loginBoolean=true;
    // this.addEvent.emit(this.loginBoolean);
  }


}
