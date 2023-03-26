import { Component } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { Codes } from "./sourceCode.models";

import { ProductService } from "src/app/services/product.service";

@Component({
  templateUrl: 'forms.component.html'
})
export class FormComponent {
  sourceCodes = new Codes().sourceCodes;
  productId: string | undefined;
  product: Product;
  isEditing = false;

  constructor(private productService: ProductService) {
    this.product = new Product();
  }

  get products(): Product[] {
    return this.productService.products;
  }

  edit(product: Product) {
    this.product = product;
    this.isEditing = true;
  }

  save() {
    if(!this.isEditing) {
      this.products.push(this.product);
      this.reset();
    }
  }

  reset() {
    this.product = new Product();
    this.isEditing = false;
  }

  get selectedProduct(): Product | undefined {
    return this.products.find(p => p.id === this.productId);
  }

  isSelected(product: Product): string {
    return product.id === (this.productId ?? '0')
      ? 'bg-info' : '';
  }

}