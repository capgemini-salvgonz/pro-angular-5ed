import { Component } from "@angular/core";
import { Codes } from "./sourceCode.models";

@Component({
  templateUrl: "ngTemplate.html"
})
export class NgTemplate {
  sourceCodes: string[] =  new Codes().sourceCodes;
  optionSelected: string = "Info";

  messages = [
    { id: "INF001", header: "Info", title: "Mensaje importante", message: "Este es un mesaje informativo" },
    { id: "WAN001", header: "Warning", title: "Acción requerida", message: "Este es un aviso de precaución" },
    { id: "DAN001", header: "Danger", title: "Prohibido", message: "Este es un aviso de prohibición" },
  ];

  getMessage(header: string = "Info") {
    return Array.of(this.messages.find(m => m.header === header));
  }

  getClass(header: string = "Info"): string {
    const style = 'bg-' + header.toLowerCase();
    return header.toLowerCase() === 'danger'
      ? style + " text-white"
      : style;
  }
  
}