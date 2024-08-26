import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  sendingData: boolean = false;
  resetPasswordSuccessfully: boolean = false;
  signupSuccessfully: boolean = false;
  signupFails: boolean = false;
  loginFails: boolean = false;
  isLoggedIn: boolean = false;
  userEmail: any = '';
  userPassword: any;


  constructor(public router: Router) {

  }


  signupService(formValue: any, signupForm: any) {
   
  }


  redirectToLoginAfterSignupSuccessfullyService(formValueName: string) {

  }


  displayErrorIfSingupFailsService() {
    this.signupFails = true;
    this.sendingData = true;
    setTimeout(() => {
      this.signupFails = false;
      this.sendingData = false;
    }, 2200);
  }


  loginService(formValue: any, logInForm: any, rememberMeCheckBoxValue: any) {

  }


  saveLoggedStatusInLocalStorage() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
  }


  saveUserInInputsIfRememberMe(rememberMeCheckBoxValue: any, formValue: any) {
    if (rememberMeCheckBoxValue) {
      this.userEmail = localStorage.setItem('userEmail', formValue.email);
      this.userPassword = localStorage.setItem('userPassword', formValue.password);
    } else {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPassword');
    }
  }


  loadDisplayedNameService() {

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

  }


  logoutService() {
    
  }


  removeLoggedStatusFromLocalStorage() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }


  deleteGuestUserAfterLogoutService() {

  }


  resetPasswordService(formValues: any, forgotMyPasswordForm: any) {

  }


  displayMessageIfPasswordResetedSuccessfullyService() {
    setTimeout(() => {
      this.sendingData = false;
      this.resetPasswordSuccessfully = false;
      this.router.navigateByUrl('/login');
    }, 2000);
  }
}