import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:any;
  password:any;
  errorMessage:any;

  constructor(private fService:FirebaseService, private router:Router) {}

  loginuser(){
    this.fService.loginUser(this.email,this.password)
    .then(res => {
      console.log('Berjaya Login');
      this.router.navigate(['form']);
      this.fService.userloggedin(this.email);
    }, err => {
      this.errorMessage = err.message;
      console.log(err);
    })
  }

}
