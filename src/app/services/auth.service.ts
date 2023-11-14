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
        console.error(error.message);
        this.displayErrorIfSingupFailsService();
      })
  }


  redirectToLoginAfterSignupService(formValueName: any) {
    updateProfile(this.auth.currentUser!, { displayName: formValueName })
      .then(() => {
        this.sendingData = false;
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
}