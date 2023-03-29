import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/product.model";

@Component({
  selector: 'y-component',
  template: '<h1>Y Component: {{productService.products.length}}</h1>'
})
export class YComponent {
  constructor(public productService: ProductService) {
  }
}