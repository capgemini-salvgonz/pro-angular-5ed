import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentModule } from './components/component.module';

import { XComponent } from './modules/moduleA/x.component';
import { YComponent } from './modules/moduleB/y.component';



@NgModule({
  declarations: [
    AppComponent,
    XComponent,
    YComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
