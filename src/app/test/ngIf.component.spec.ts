import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularModule } from "../modules/angular.module";
import { MaterialModule } from "../modules/material.module";

import { NgIfComponent } from "../components/ngIf/ngIf.component";
import { CodeViewer } from "../components/code-viewer/codeViewer.component";

describe("NgIfComponent", () => {
  let fixture: ComponentFixture<NgIfComponent>;
  let component: NgIfComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfComponent, CodeViewer],
      imports: [AngularModule, MaterialModule]
    });
    fixture = TestBed.createComponent(NgIfComponent);
    component = fixture.componentInstance;
  });

  it("is defined", () => {
    expect(component).toBeDefined()
  });

  it("Source codes", () => {
    expect(component.sourceCodes.length).toBe(2);
    expect(component.optionSelected).toBe("");
  });
});