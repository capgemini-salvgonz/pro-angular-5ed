import { Component } from "@angular/core";



@Component({
  templateUrl: "ngTemplate.html"
})
export class NgTemplate {
  optionSelected: string = "Info";
  messages = [
    { id:"INF001", header: "Info", title: "Mensaje importante", message: "Este es un mesaje informativo" },
    { id:"WAN001", header: "Warning", title: "Acción requerida", message: "Este es un aviso de precaución" },
    { id:"DAN001", header: "Danger", title: "Prohibido", message: "Este es un aviso de prohibición" },
  ];

  getMessage(header: string = "Info") {
    return [this.messages.find(m => m.header === header)];
  }

  get cssClass(): string {
    const style = 'bg-' + this.optionSelected.toLocaleLowerCase();
    return this.optionSelected === 'Danger'
    ? style + " text-white"
    : style;
  }
}