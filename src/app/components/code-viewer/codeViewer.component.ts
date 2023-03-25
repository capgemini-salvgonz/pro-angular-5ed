import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "codeViewer.component.html",
  selector: "code-viewer",
})
export class CodeViewer {

  @Input()
  typeScript: string = "";

  @Input()
  templateHtml: string = "";

  sourceCode: string = "";
  viewer: "Typescript" | "Template" = "Typescript";

  get sourceCodeViewer(): string {
    if (this.sourceCode === "" ) {
      this.switchViewer("Typescript");
    }
    return this.sourceCode;
  }

  switchViewer(viewerType: "Typescript" | "Template") {
    this.viewer = viewerType;
    this.sourceCode = this.viewer === "Typescript"
      ? this.typeScript
      : this.templateHtml;
  }
}