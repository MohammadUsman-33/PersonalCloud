import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    constructor(private http: Http) {

    }
    //ngOnInit(): void {

    //    this.http.get('http://localhost:57364/api/memory').subscribe(data => {
    //        console.log(data);
    //    });
    //}
}