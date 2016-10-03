import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data: any;

  constructor(private http: Http){
    http.get('/assets/data.json')
      .subscribe(value => {
        this.data = value.json();
        this.data = this.transform(this.data.ID, this.data.name);
        console.log(this.data);
      })
  }

  transform(arr1, arr2){
    var arr = [];
    arr1.forEach((elt, i) => {
      arr.push({ ID: elt, name: arr2[i] });
    });
    return arr;
  }

}
