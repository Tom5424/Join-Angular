import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, updateProfile } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  sendingData: boolean = false;
  signupSuccessfully: boolean = false;
  signupFails: boolean = false;
  loginFails: boolean = false;


  constructor(public auth: Auth, public router: Router) {

  }


  signupService(formValue: any, signupForm: any) {
    signupForm.reset();
    this.sendingData = true;
    createUserWithEmailAndPassword(this.auth, formValue.email, formValue.password)
      .then((userCredential) => {
        this.signupSuccessfully = true;
        this.redirectToLoginAfterSignupSuccessfullyService(formValue.name);
      })
      .catch((error) => {
        console.error(error.message);
        this.displayErrorIfSingupFailsService();
      })
  }


  redirectToLoginAfterSignupSuccessfullyService(formValueName: any) {
    updateProfile(this.auth.currentUser!, { displayName: formValueName })
      .then(() => {
        this.sendingData = false;
        this.router.navigateByUrl('/login');
        this.signupSuccessfully = false;
      })
  }


  displayErrorIfSingupFailsService() {
    this.signupFails = true;
    this.sendingData = true;
    setTimeout(() => {
      this.signupFails = false;
      this.sendingData = false;
    }, 2200);
  }


  loginService(formValue: any, logInForm: any) {
    logInForm.reset();
    this.sendingData = true;
    signInWithEmailAndPassword(this.auth, formValue.email, formValue.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error.message);
        this.displayErrorIfLoginFailsService();
      });
  }


  displayErrorIfLoginFailsService() {
    this.loginFails = true;
    this.sendingData = true;
    setTimeout(() => {
      this.loginFails = false;
      this.sendingData = false;
    }, 2200);
  }


  loginAsGuestService() {
    signInAnonymously(this.auth)
      .then((guestUser) => {
        console.log(guestUser);
        updateProfile(this.auth.currentUser!, { displayName: 'Guest' })
          .then(() => {
            console.log(this.auth.currentUser!);
          })
      });
  }
}