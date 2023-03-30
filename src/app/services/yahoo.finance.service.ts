import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Symbol {
  name: string,
  symbol: string
}

@Injectable()
export class YahooFinanceService {

  // private url: string = 'https://query1.finance.yahoo.com/v7/finance/spark';
  private url: string = 'https://query1.finance.yahoo.com/v8/finance/chart';

  availableSymbols: Symbol[] = [
    { name: "NASDAQ", symbol: "^IXI" },
    { name: "DOW JONES", symbol: "^DJI" },
    { name: "BBVANDQC", symbol: "BBVANDQC.MX" },
  ];

  constructor(private http: HttpClient) { }

  get symbols(): Symbol[] {
    return this.availableSymbols;
  }

  getPrice(symbol: string): Observable<any> {
    const uri = `${this.url}/${symbol}?interval=1mo&includePrePost=true`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.request("GET", uri);
  }
}