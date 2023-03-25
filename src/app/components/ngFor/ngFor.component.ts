import { Component } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";
import { Codes } from "./sourceCode.models";

@Component({
  templateUrl: 'ngFor.component.html'
})
export class NgForComponent {

  sourceCodes = new Codes().sourceCodes;

  viewer: "Typescript" | "Template" = "Typescript";

  constructor(private productService: ProductService) {
  }

  get products() : Product[] {
    return this.productService.products;
  }

}