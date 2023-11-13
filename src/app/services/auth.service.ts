import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  sendingData: boolean = false;
  signupSuccessfully: boolean = false;
  signupFails: boolean = false;
  errorMessage: string = '';


  constructor(public auth: Auth, public router: Router) {

  }


  signupService(formValue: any, signupForm: any) {
    signupForm.reset();
    this.sendingData = true;
    createUserWithEmailAndPassword(this.auth, formValue.email, formValue.password)
      .then((userCredential) => {
        this.signupSuccessfully = true;
        this.redirectToLoginAfterSignupService(formValue.name);
      })
      .catch((error) => {
        this.displayErrorIfSingupFailsService(error);
      })
  }


  redirectToLoginAfterSignupService(formValueName: any) {
    updateProfile(this.auth.currentUser!, { displayName: formValueName })
      .then(() => {
        this.sendingData = false;
        this.router.navigateByUrl('/login');
      })
  }


  displayErrorIfSingupFailsService(error: Error) {
    if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
      this.errorMessage = 'Email alredy exist. Please type another Email';
      this.signupFails = true;
      this.sendingData = true;
    }
    setTimeout(() => {
      this.signupFails = false;
      this.sendingData = false;
    }, 1500);
  }
}