import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-aduan-listing',
  templateUrl: './aduan-listing.page.html',
  styleUrls: ['./aduan-listing.page.scss'],
})
export class AduanListingPage implements OnInit {
  aduans=[];

  constructor(private firebase:FirebaseService, private firestore:AngularFirestore) { }

  ngOnInit() {
    this.firebase.senaraiaduan().subscribe(data => {
      this.aduans = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          tajuk: e.payload.doc.data()['tajuk'],
          deskripsi: e.payload.doc.data()['deskripsi'],
          negeri: e.payload.doc.data()['negeri'],
        }
      })
    })
  }

}
