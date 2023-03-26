import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";


const features : any = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
]

@NgModule({
  imports: [features],
  exports: [features],
})
export class AngularModule { }