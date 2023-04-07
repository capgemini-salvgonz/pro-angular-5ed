import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Symbol {
  name: string,
  symbol: string
}

@Injectable()
export class YahooFinanceService {

  private url: string = 'https://prxfibvc68.execute-api.us-west-1.amazonaws.com/development';

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
    const uri = `${this.url}?symbol=${symbol}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.request("GET", uri, {headers});
  }
}