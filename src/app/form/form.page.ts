import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  data:any={};

  constructor(private fService:FirebaseService, private router:Router) { }

  ngOnInit() {
  }

  hantarAduan(){
    this.fService.simpanAduan(this.data)
    .then(_=>{
      alert('Your Data saved successfully');
      this.router.navigate(['/aduan-listing'])
    }, err=>{
      console.log("ERROR", err)
    })
  }

}
