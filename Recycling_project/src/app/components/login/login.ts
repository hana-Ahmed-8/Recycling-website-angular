import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

// declare const google: any;

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  // loginForm: FormGroup;
  // showPassword = false;

  // constructor(private fb: FormBuilder) {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [
  //       Validators.required,
  //       Validators.minLength(8),
  //       Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
  //     ]]
  //   });
  // }


  // ngOnInit(): void {
  //   google.accounts.id.initialize({
  //     client_id: 'YOUR_GOOGLE_CLIENT_ID',
  //     callback: (response: any) => this.handleCredentialResponse(response),
  //   });
  // }

  // signInWithGoogle() {
  //   google.accounts.id.prompt(); // يفتح نافذة اختيار الإيميلات المسجلة على الجهاز
  // }

  // handleCredentialResponse(response: any) {
  //   console.log('Google credential:', response);
  //   alert('Google login success!');
  // }



  // submitLoginData() {
  //   console.log(`Email is ${this.loginForm.value.email}`);
  //   alert(`Login successful! Email: ${this.loginForm.value.email}`);
  // }

  // get emailCtrl(): FormControl {
  //   return this.loginForm.get('email') as FormControl;
  // }

  // get passwordCtrl(): FormControl {
  //   return this.loginForm.get('password') as FormControl;
  // }

  // togglePassword() {
  //   this.showPassword = !this.showPassword;
  // }
  //////////////////////////////
  loginForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
      ]]
    });
  }

  submitLoginData() {
    console.log(`Email is ${this.loginForm.value.email}`);
    alert(`Login successful! Email: ${this.loginForm.value.email}`);
  }

  get emailCtrl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordCtrl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
