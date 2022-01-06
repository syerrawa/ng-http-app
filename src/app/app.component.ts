import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-http-app';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get('./assets/data.json').subscribe((res: any) => {
      this.title = `${res.title}`;
    });
  }
}
