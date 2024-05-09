import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.media.scss']
})


export class LoginComponent implements OnInit {
  introIsDisplayed: boolean = false;


  constructor(public authService: AuthService, public routingService: RoutingService, public router: Router) {

  }


  logInForm = new FormGroup({
    email: new FormControl(this.authService.userEmail, Validators.required),
    password: new FormControl(this.authService.userPassword, Validators.required),
    rememberMeCheckBox: new FormControl(),
  });


  ngOnInit(): void {
    this.routingService.savePreviousUrl(this.router.url)
    this.displayIntro();
    this.preFilledInputsIfRememberMe();
  }


  displayIntro() {
    this.introIsDisplayed = true;
    setTimeout(() => {
      this.introIsDisplayed = false;
    }, 710);
  }


  preFilledInputsIfRememberMe() {
    this.authService.userEmail = localStorage.getItem('userEmail');
    this.authService.userPassword = localStorage.getItem('userPassword');
    this.logInForm.patchValue({
      email: this.authService.userEmail,
      password: this.authService.userPassword,
    });
  }


  login(formValue: any) {
    this.authService.loginService(formValue, this.logInForm, this.logInForm.controls.rememberMeCheckBox.value);
  }


  guestLogin() {
    this.authService.loginAsGuestService();
  }
}
