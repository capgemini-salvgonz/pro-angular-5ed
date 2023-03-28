

export class Codes {
  sourceCodes: string[] = [
`
@Component({
  templateUrl: 'ngIf.component.html'
})
export class NgIfComponent {
  optionSelected : string  = "";
}
`,
`
<mat-form-field appearance="fill" class="w-100">
<mat-label>Template</mat-label>
<mat-select [(value)]="optionSelected">
  <mat-option value="Info">Show Message</mat-option>
  <mat-option value="Ocultar">Ocultar</mat-option>
</mat-select>
</mat-form-field>

<div *ngIf="optionSelected == 'Info'">
Mensaje que se verá solo cuando la opción seleccionada es "Show Message"
</div>`,
  ];
}