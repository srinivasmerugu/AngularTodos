import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import * as localforage from 'localforage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:any;
password: any;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }
   login() {

    if ((this.email && this.password)==undefined){
      alert("Please enter the email and password ");
    }else{
    this.router.navigate(['todoHome']);
    }
    
  }

}
