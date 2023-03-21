import { NgModule } from "@angular/core";

/**
 * Modules
 */
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../modules/material.module";

/**
 * Components
 */
import { FormComponent } from "./forms/forms.component";
import { NavBarComponent } from "./navBar/navBar.component";
import { NgForComponent } from "./ngFor/ngFor.component";
import { NgIfComponent } from "./ngIf/ngIf.component";
import { RoutingComponent } from "./routing/routing.component";

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
];

const router = RouterModule.forRoot([
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
  { path: "**", redirectTo: "router" },
]);


@NgModule({
  declarations: [components],
  exports: [components],
  imports: [MaterialModule, router],
})
export class ComponentModule { }