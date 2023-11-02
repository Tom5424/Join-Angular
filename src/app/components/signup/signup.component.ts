import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {


  constructor(private auth: Auth) {

  }


  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(64)]),
    acceptPrivacyPolicy: new FormControl('', Validators.required),
  });


  // logInForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/), Validators.maxLength(64)]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  // });


  onSubmitForm() {

  }
}
