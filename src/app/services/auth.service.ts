import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, updateProfile, deleteUser, onAuthStateChanged, signOut } from "@angular/fire/auth";
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
        this.sendingData = false;
        this.router.navigateByUrl('/summary')
      })
      .catch((error) => {
        console.error('Login fails, the entered email or password are wrong. Please try again.', error.message);
        this.displayErrorIfLoginFailsService();
      });
  }


  loadDisplayedNameService() {
    onAuthStateChanged(this.auth, (user) => {
      updateProfile(this.auth.currentUser!, { displayName: user?.displayName });
    })
  }


  displayErrorIfLoginFailsService() {
    this.loginFails = true;
    this.sendingData = true;
    setTimeout(() => {
      this.loginFails = false;
      this.sendingData = false;
    }, 2000);
  }


  loginAsGuestService() {
    signInAnonymously(this.auth)
      .then((guestUser) => {
        updateProfile(this.auth.currentUser!, { displayName: 'Guest' })
        this.router.navigateByUrl('/summary');
      })
      .catch((error) => {
        console.error(error.message);
      })
  }


  logoutService() {
    this.deleteGuestUserAfterLogoutService();
    signOut(this.auth).then(() => {
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      console.error(error.message);
    });
  }


  deleteGuestUserAfterLogoutService() {
    if (this.auth.currentUser?.isAnonymous) {
      deleteUser(this.auth.currentUser!);
    }
  }
}