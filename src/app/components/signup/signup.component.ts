import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {
  sendingData: boolean = false;


  constructor(private auth: Auth) {

  }


  signupForm = new FormGroup({
    // name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(50)]),
    acceptPrivacyPolicy: new FormControl('', Validators.required),
  });


  onSubmitForm() {
    this.sendingData = true;
    createUserWithEmailAndPassword(this.auth, this.signupForm.controls.email.value!, this.signupForm.controls.password.value!)
      .then((response) => {
        this.signupForm.controls.email.reset();
        this.signupForm.controls.password.reset();
        console.log(response);
        this.sendingData = false;
      })
      .catch((error) => {
        console.log(error.message);
      })
  }
}
