import {Component} from "@angular/core";
import { Codes } from "./sourceCode.models";


@Component({
  templateUrl: 'ngIf.component.html'
})
export class NgIfComponent {
  sourceCodes = new Codes().sourceCodes;
  optionSelected : string  = "";
}