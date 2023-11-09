import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth";
import { Firestore, collection, addDoc } from '@angular/fire/firestore';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {
  sendingData: boolean = false;


  constructor(public auth: Auth, public firestore: Firestore) {

  }


  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(50)]),
    acceptPrivacyPolicy: new FormControl('', Validators.required),
  });


  onSubmitForm(formValue: any) {
    this.sendingData = true;
    createUserWithEmailAndPassword(this.auth, formValue.email, formValue.password)
      .then((userCredential) => {
        updateProfile(this.auth.currentUser!, { displayName: formValue.name })
          .then(() => {
            this.signupForm.reset();
            this.sendingData = false;
          })
      })
      .catch((error) => {
        console.log(error.message);
      })
  }
}