

export class Codes {
  sourceCodes: string[] = [
`
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/user.model";

interface Result {
  isValid: boolean,
  form: string
}

@Component({
  selector: 'user-form',
  templateUrl: 'userForm.component.html',
})
export class UserForm {
  user : User = new User();
  isSubmited = false;
  result: Result | undefined;

  get formSubmited() {
    return JSON.stringify(this.result);
  }

  submit(ngForm : NgForm) {
    this.isSubmited = true;
    this.user = ngForm.form.value;

    this.result = {
      isValid: ngForm.valid ?? false,
      form: JSON.stringify(this.user)
    }
  }
}`,
`
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <div>
        <form #myForm="ngForm" (ngSubmit)="submit(myForm)" >
          <div class="form-group">
            <label for="name">Nombre</label>
            <input id="name" placeholder="Jhon due" class="form-control" name="name" #name="ngModel"
            ngModel required minlength="10">
            <span style="color: red; font-size: 0.8rem;" *ngIf="!name.valid && isSubmited">Valor no válido</span>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" placeholder="example@gmail.com" class="form-control" #email="ngModel"
            name="email" ngModel required email >
            <span style="color: red; font-size: 0.8rem;" *ngIf="!email.valid&&isSubmited">Valor no válido</span>
          </div>
          <div class="form-group">
            <label for="rfc">RFC</label>
            <input id="rfc" placeholder="XXXX000000" class="form-control" #rfc="ngModel"
            name="rfc" ngModel minlength="10" required>
            <span style="color: red; font-size: 0.8rem;" *ngIf="!rfc.valid&&isSubmited">Valor no válido</span>
          </div>
          <div class="form-group">
            <label for="zipCode">Código Postal</label>
            <input id="zipCode" placeholder="1420" class="form-control" #zipCode="ngModel"
            name="zipCode" ngModel required>
            <span style="color: red; font-size: 0.8rem;" *ngIf="!zipCode.valid&&isSubmited">Valor no válido</span>
          </div>
          <button class="btn btn-primary btn-sm mt-2" type="submit">Enviar</button>
        </form>
      </div>
    </div>
    <div class="col">
      <h1>Datos enviados del formulario.</h1>
      {{formSubmited}}
    </div>
  </div>
</div>`,
  ];
}