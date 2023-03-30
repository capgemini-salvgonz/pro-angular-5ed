
export class YahooFinance {
  currency: string = '';
  symbol: string = '';
  exchangeName: string = '';
  instrumentType: string = '';
  regularMarketTime: number = new Date().getTime();
  timezone: string = '';
  regularMarketPrice: number = 0;
  headerImage = "https://s.yimg.com/rz/p/yahoo_finance_en-US_s_f_pw_351X40_finance_2x.png";
}