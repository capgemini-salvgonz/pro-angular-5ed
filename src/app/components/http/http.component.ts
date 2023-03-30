import { Component } from "@angular/core";
import { YahooFinance } from "src/app/models/yahoo.model";
import { Symbol, YahooFinanceService } from "src/app/services/yahoo.finance.service";


@Component({
  templateUrl: 'http.component.html'
})
export class HttpComponent {

  symbols: Symbol[];
  optionSelected : string = '';
  yahooFinanceModel = new YahooFinance();

  constructor(private yahooFinance :  YahooFinanceService) {
    this.symbols = yahooFinance.symbols;
  }

  submit() {
    this.yahooFinance.getPrice(this.optionSelected).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}