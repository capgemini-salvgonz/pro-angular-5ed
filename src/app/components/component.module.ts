import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

/**
 * Modules
 */
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../modules/material.module";

/**
 * Components
 */
import { FormComponent } from "./forms/forms.component";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./navBar/navBar.component";
import { NgForComponent } from "./ngFor/ngFor.component";
import { NgIfComponent } from "./ngIf/ngIf.component";
import { RoutingComponent } from "./routing/routing.component";
import { NgTemplate } from "./ng-template/ngTemplate";

/**
 * Child components
 */
import { AComponent } from "./routing/a.component";
import { BComponent } from "./routing/b.component";
import { CComponent } from "./routing/c.component";



const components: any = [
  FormComponent,
  NavBarComponent,
  NgForComponent,
  NgIfComponent,
  RoutingComponent,
  NgTemplate,
];

const router = RouterModule.forRoot([
  { path: "home", component: HomeComponent },
  {
    path: "router",
    component: RoutingComponent,
    children: [
      { path: "a", component: AComponent },
      { path: "b", component: BComponent },
      { path: "c", component: CComponent },
      { path: "**", redirectTo: "a" }
    ],
  },
  { path: "if", component: NgIfComponent },
  { path: "for", component: NgForComponent },
  { path: "forms", component: FormComponent },
  { path: "ng-template", component: NgTemplate },
  { path: "**", redirectTo: "home" },
]);


@NgModule({
  declarations: [components],
  exports: [components],
  imports: [MaterialModule, BrowserModule, router],
})
export class ComponentModule { }