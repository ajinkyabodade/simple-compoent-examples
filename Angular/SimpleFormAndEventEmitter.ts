import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  template: `
    <div>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <input
          type="text"
          id="username-input"
          formControlName="username"
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          id="password-input"
          formControlName="password"
          placeholder="Password"
        />
        <br />
        <button type="submit" id="login-button" [disabled]="loginForm.invalid">Submit</button>
      </form>
    </div>
  `
})
export class LoginPageComponent {
  @Output() login: EventEmitter<{ username: string, password: string }> = new EventEmitter();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.login.emit({ username, password });
    }
  }
}
