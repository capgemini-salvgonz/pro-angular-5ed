import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


const features : any = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
]

@NgModule({
  imports: [features],
  exports: [features],
})
export class AngularModule { }