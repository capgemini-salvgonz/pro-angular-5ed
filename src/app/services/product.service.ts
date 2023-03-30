import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";


@Injectable()
export class ProductService {
  
  private productList: Product[] = [
    new Product("B01D19RD1U", "My Arcade - Máquina Retro", 749,
      "https://m.media-amazon.com/images/I/614eXGMyAqS._AC_SL1000_.jpg"),
    new Product("B00E8TQ3ZA", "Ernie Ball - Kit de herramientas para músicos", 1369,
      "https://m.media-amazon.com/images/I/71wBIdwJG-L._AC_SL1500_.jpg"),
    new Product("B000M3HST6", "Micrófono Sennheiser para instrumentos e 602-II", 4149,
      "https://m.media-amazon.com/images/I/419xDlhhP3L._AC_.jpg"),
    new Product("B07BBZW4VQ", "Sterling by Music Man RAY5-VSBS-M1 Sterling by Music Man StingRay Ray5", 19616,
      "https://m.media-amazon.com/images/I/710WJciEsIL._AC_SL1500_.jpg"),
  ];

  get products(): Product[] {
    return this.productList;
  }
}