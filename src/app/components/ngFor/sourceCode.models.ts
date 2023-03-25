

export class Codes {
  sourceCodes: string[] = [
`import { Inject } from "@angular/core";
import { Product } from "../models/product.model";

@Inject({})
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

/***********************************************************************************************************/

import { Component } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
  templateUrl: 'ngFor.component.html'
})
export class NgForComponent {

  constructor(private productService: ProductService) {
  }

  get products() : Product[] {
    return this.productService.products;
  }
}
/***********************************************************************************************************/

export class Product {
  id: string = "";
  name: string = "";
  price: number = 0;
  image: string = "";

  constructor(id: string, name: string, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}`,
`<table class="table table-striped mb-4">
  <thead>
    <tr>
    <th>#</th>
    <th>Id</th>
    <th colspan="2">Producto</th>
    <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let product of products; let i = index; let c = count;">
    <td>{{i+1}} of {{c}}</td>
    <td>{{product.id}}</td>
    <td><img src="{{product.image}}" style="width: 2rem; height: auto;"></td>
    <td>{{product.name}}</td>
    <td>{{product.price}}</td>
    </tr>
  </tbody>
</table>`,
  ];
}