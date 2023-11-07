import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, signInWithCustomToken } from "@angular/fire/auth";
import { User } from 'src/app/models/user';
import { Firestore, collection, addDoc, doc } from '@angular/fire/firestore';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {
  sendingData: boolean = false;
  user: User = new User();


  constructor(public auth: Auth, public firestore: Firestore) {

  }


  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(50)]),
    acceptPrivacyPolicy: new FormControl('', Validators.required),
  });


  onSubmitForm(formValue: any) {
    const coll = collection(this.firestore, 'users');
    addDoc(coll, formValue);
    // this.sendingData = true;
    // createUserWithEmailAndPassword(this.auth, formValue, formValue)
    //   .then((userCredential) => {
    //     this.signupForm.controls.name.reset();
    //     this.signupForm.controls.email.reset();
    //     this.signupForm.controls.password.reset();
    //     this.sendingData = false;
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   })
  }
}
