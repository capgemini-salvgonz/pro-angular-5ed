import { NgModule } from "@angular/core";

/**
 * Modules
 */
import { BootstrapModule } from "../modules/bootstrap.module";
import { MaterialModule } from "../modules/material.module";
import { RouterModule } from "@angular/router";
import { AngularModule } from "../modules/angular.module";

import { ProductService } from "../services/product.service";
import { YahooFinanceService } from "../services/yahoo.finance.service";

/**
 * Components
 */
import { FormComponent } from "./forms/forms.component";
import { CodeViewer } from "./code-viewer/codeViewer.component";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./navBar/navBar.component";
import { NgForComponent } from "./ngFor/ngFor.component";
import { NgIfComponent } from "./ngIf/ngIf.component";
import { NgTemplate } from "./ng-template/ngTemplate";
import { RoutingComponent } from "./routing/routing.component";
import { UserForm } from "./forms/user/userForm.component";
import { DirectiveComponent } from "./directives/directive.component";
import { HttpComponent } from "./http/http.component";

/**
 * Child components
 */
import { AComponent } from "./routing/a.component";
import { BComponent } from "./routing/b.component";
import { CComponent } from "./routing/c.component";

import { InactivityDirective } from "../directives/inactivity.directive"; 

const components: any = [
  CodeViewer,
  FormComponent,
  NavBarComponent,
  NgForComponent,
  NgIfComponent,
  NgTemplate,
  RoutingComponent,
  InactivityDirective,
  DirectiveComponent,
  HttpComponent,
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
  { path: "directives", component: DirectiveComponent },
  { path: "http-request", component: HttpComponent },
  { path: "**", redirectTo: "home" },
]);


@NgModule({
  declarations: [components, UserForm],
  exports: [components],
  imports: [     
    AngularModule,
    BootstrapModule,
    MaterialModule,
    router
  ],
  providers: [ProductService, YahooFinanceService]
})
export class ComponentModule { }