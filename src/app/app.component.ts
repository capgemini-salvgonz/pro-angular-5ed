import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  timeStamp = new Date().getTime();
  timeout = 300000;

  constructor(private router: Router) { }

  onMouseMove() {
    this.timeStamp = new Date().getTime();
  }

  controlTimeout() {
    console.log("Manage TIMEOUT");
    // this.router.navigateByUrl("/");
  }
}
