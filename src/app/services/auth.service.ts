import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  sendingData: boolean = false;


  constructor(public auth: Auth) {

  }


  signupService(formValue: any, signupForm: any) {
    this.sendingData = true;
    createUserWithEmailAndPassword(this.auth, formValue.email, formValue.password)
      .then((userCredential) => {
        updateProfile(this.auth.currentUser!, { displayName: formValue.name })
          .then(() => {
            signupForm.reset();
            this.sendingData = false;
          })
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

}
