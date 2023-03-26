import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const features : any = [
  NgbModule,
];

@NgModule({
  imports: [features],
  exports: [features],
})
export class BootstrapModule {
}