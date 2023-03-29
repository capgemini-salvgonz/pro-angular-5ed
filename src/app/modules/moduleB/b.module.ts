import { NgModule } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { YComponent } from "./y.component";

@NgModule({
  declarations: [YComponent],
  exports: [YComponent],
  providers: [ProductService]
})
export class AModule { }