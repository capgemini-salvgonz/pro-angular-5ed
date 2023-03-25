

export class Codes {
  sourceCodes: string[] = [
    `import { Component } from "@angular/core";

  @Component({
    templateUrl: "ngTemplate.html"
  })
  export class NgTemplate {
  
  optionSelected: string = "Info";  
  messages = [
    { id: "INF001", header: "Info", title: "Mensaje importante", message: "Este es un mesaje informativo" },
    { id: "WAN001", header: "Warning", title: "Acción requerida", message: "Este es un aviso de precaución" },
    { id: "DAN001", header: "Danger", title: "Prohibido", message: "Este es un aviso de prohibición" },
  ];

  getMessage(header: string = "Info") {
    return Array.of(this.messages.find(m => m.header === header));
  }  
    `,
    `Selección de estilo para la plantilla de ejemplo:
    <mat-form-field appearance="fill" class="w-100">
    <mat-label>Template</mat-label>
    <mat-select [(value)]="optionSelected">
      <mat-option value="Info">Info</mat-option>
      <mat-option value="Warning">Warning</mat-option>
      <mat-option value="Danger">Danger</mat-option>
    </mat-select>
  </mat-form-field>

  <ng-template *ngIf="optionSelected == 'Info'" [ngTemplateOutlet]="message"
    [ngTemplateOutletContext]="{message: 'Info'}" />
  <ng-template *ngIf="optionSelected == 'Warning'" [ngTemplateOutlet]="message"
    [ngTemplateOutletContext]="{message: 'Warning'}" />
  <ng-template *ngIf="optionSelected == 'Danger'" [ngTemplateOutlet]="message"
    [ngTemplateOutletContext]="{message: 'Danger'}" />

  <ng-template #message let-text="message">
    <div *ngFor="let message of getMessage(text)">
      <div class="w-75">
        <div class="card">
          <div class="card-header {{getClass(message?.header)}}">
            <h2>{{message?.id}}-{{message?.header?.toUpperCase()}}</h2>
          </div>
          <div class="card-body">
            <div class="card-title">
              <h2>{{message?.title}}</h2>
            </div>
            <div class="card-text"> {{message?.message}} </div>
          </div>
        </div>
      </div>
    </div>
  </ng-template> `,
  ];
}