import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/product.model";

@Component({
  selector: 'x-component',
  template: '<h1>X Component : {{productService.products.length}}</h1>'
})
export class XComponent {

  constructor(public productService: ProductService) {
    this.productService.products.push(
      new Product("B09S5PTJXX", "Maquina Laminadora Para Hacer Pasta", 499,
    "https://m.media-amazon.com/images/I/711O4pwwmtL._AC_SL1500_.jpg"));
  }
}