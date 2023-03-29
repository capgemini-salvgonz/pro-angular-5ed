import { NgModule } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { XComponent } from "./x.component";

@NgModule({
  declarations: [XComponent],
  exports: [XComponent],
  providers: [ProductService]
})
export class AModule { }