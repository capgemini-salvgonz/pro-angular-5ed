import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/user.model";
import { Codes } from "./sourceCode.models";

interface Result {
  isValid: boolean,
  form: string
}

@Component({
  selector: 'user-form',
  templateUrl: 'userForm.component.html',
})
export class UserForm {
  sourceCodes = new Codes().sourceCodes;
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
}