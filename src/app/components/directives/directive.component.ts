import { Component } from "@angular/core";
import { Codes } from "./sourceCode.models";


@Component({
  templateUrl : "directive.component.html"
})
export class DirectiveComponent {
  sourceCodes = new Codes().sourceCodes;
}