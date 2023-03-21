import { Component } from '@angular/core';


@Component({
  templateUrl: "routing.component.html"
})
export class RoutingComponent {
  codeFragment: string = `
  import { NgModule } from "@angular/core";
  import { RouterModule } from "@angular/router";
  import { MaterialModule } from "../modules/material.module";

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
  export class ComponentModule { }`;

  htmlTemplateCode = `
  <button mat-raised-button color="primary" routerLink="/router/a" class="mb-2">Componente A</button>
  <button mat-raised-button color="primary" routerLink="/router/b" class="mb-2">Componente B</button>
  <button mat-raised-button color="primary" routerLink="/router/c" class="mb-2">Componente C</button>

  <router-outlet></router-outlet>
  `;
}


