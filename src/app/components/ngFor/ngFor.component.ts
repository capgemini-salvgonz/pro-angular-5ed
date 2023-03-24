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