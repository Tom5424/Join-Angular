import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  sendingData: boolean = false;
  signupSuccessfully: boolean = false;


  constructor(public auth: Auth, public router: Router) {

  }


  signupService(formValue: any, signupForm: any) {
    signupForm.reset();
    this.sendingData = true;
    createUserWithEmailAndPassword(this.auth, formValue.email, formValue.password)
      .then((userCredential) => {
        this.signupSuccessfully = true;
        this.directToLogin(formValue.name);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }


  directToLogin(formValueName: any) {
    updateProfile(this.auth.currentUser!, { displayName: formValueName })
      .then(() => {
        this.sendingData = false;
        this.router.navigateByUrl('/login');
      })
  }
}
