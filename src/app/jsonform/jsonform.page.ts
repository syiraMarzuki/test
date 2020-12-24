import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.page.html',
  styleUrls: ['./jsonform.page.scss'],
})
export class JsonformPage implements OnInit {

  data:any={};
  urlinsert:any="http://localhost/aduan/aduaninsert.php";
  headers:HttpHeaders;
  aduandata:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  hantarAduan(){
    this.aduandata={
      'tajuk':this.data.tajuk,
      'deskripsi':this.data.deskripsi,
      'negeri':this.data.negeri,
      'longitude':this.data.longitude,
      'latitude':this.data.latitude,
    };

    //headers
    this.headers=new HttpHeaders();
    this.headers.append('ContentType', 'application/json');

    //transmit to server
    this.http.post(this.urlinsert,this.aduandata,{headers:this.headers})
    .subscribe(data=>{console.log('berjaya')},
      err=> {
        console.log('error');
        console.log(err);
      });
  }

}
