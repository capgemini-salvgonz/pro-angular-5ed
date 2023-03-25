import { Component } from '@angular/core';
import { Codes } from './sourceCode.models';

@Component({
  templateUrl: "routing.component.html"
})
export class RoutingComponent {
  sourceCodes : string[] = new Codes().sourceCodes;
}


