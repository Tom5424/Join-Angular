import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, updateProfile, user } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { onAuthStateChanged, signOut } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  sendingData: boolean = false;
  signupSuccessfully: boolean = false;
  signupFails: boolean = false;
  loginFails: boolean = false;
  currentUser: string | null | undefined = '';
  guest: string = 'Guest';


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
        console.error('Registration failed, the email you entered already exists. Please try again.', error.message);
        this.displayErrorIfSingupFailsService();
      })
  }


  redirectToLoginAfterSignupSuccessfullyService(formValueName: string) {
    updateProfile(this.auth.currentUser!, { displayName: formValueName })
      .then(() => {
        this.sendingData = false;
        this.signupSuccessfully = false;
        this.router.navigateByUrl('/login');
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
        this.router.navigateByUrl('/summary')
        this.sendingData = false;

      })
      .catch((error) => {
        console.error('Login fails, the entered email or password are wrong. Please try again.', error.message);
        this.displayErrorIfLoginFailsService();
      });
  }


  updateDisplayedName() {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUser = user?.displayName;
    })
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
        this.router.navigateByUrl('/summary');
      })
      .catch((error) => {
        console.error(error.message);
      })
  }


  logoutService() {
    signOut(this.auth).then(() => {
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      console.error(error.message);
    });
  }
}