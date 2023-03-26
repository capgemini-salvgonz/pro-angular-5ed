

export class Codes {
  sourceCodes: string[] = [
`
import { Component } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { Codes } from "./sourceCode.models";

import { ProductService } from "src/app/services/product.service";

@Component({
  templateUrl: 'forms.component.html'
})
export class FormComponent {
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
}`,
`
<table class="table table-stripped">
<thead>
  <tr>
    <th colspan="2">Producto</th>
  </tr>
</thead>
<tbody>
  <tr *ngFor="let product of products">
    <td>{{product.name}}</td>
    <td>
      <button type="button" class="btn btn-sm btn-primary" (click)="edit(product);">Editar</button>
    </td>
  </tr>
</tbody>
</table>
</div>

<div class="col-6 bg-info">
<form (submit)="save()">
<div class="form-group">
  <label for="id">Id</label>
  <input class="form-control" id="id" type="text" 
    [value]="product.id?? ''"  (input)="product.id=$any($event).target.value"
    [disabled]="isEditing">
</div>
<div class="form-group">
  <label for="name">Producto</label>
  <input class="form-control" id="name" type="text" 
  [value]="product.name?? ''" (input)="product.name=$any($event).target.value">
</div>
<div class="form-group">
  <label for="price">Precio</label>
  <input class="form-control" id="price" type="text" 
  [value]="product.price?? ''" (input)="product.price=$any($event).target.value">
</div>
<button class="btn btn-warning mt-2" type="button" (click)="reset()">Reset</button>
<button *ngIf="!isEditing" class="btn btn-warning mt-2" type="submit">Guardar</button>
</form>
</div>`,
  ];
}