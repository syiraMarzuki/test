import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // email:any;
  // password:any;

  public userloggedin:any;

  constructor(private afAuth:AngularFireAuth, private firestore:AngularFirestore) { }

  loginUser(email,password){
    return new Promise<any>((resolve,reject)=> {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then(
        res=> resolve(res), //successfull
        err=> reject(err), //rejected
      )
    })
  }

  registerUser(){

  }

  displayCollections(){

  }

  simpanAduan(entry){
    return new Promise<any>((resolve,reject)=> {
      this.firestore.collection('tbl_aduan').add(entry)
      .then(resp=>{
        resolve('OK');
      }, err=>{
        reject(err);
      })
    })
  }

  senaraiaduan(){
    //fetch data
    return this.firestore.collection('tbl_aduan').snapshotChanges();
  }
}
