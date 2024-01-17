import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  introIsDisplayed: boolean = false;


  constructor(public authService: AuthService) {

  }


  ngOnInit(): void {
    this.introIsDisplayed = true;
    setTimeout(() => {
      this.introIsDisplayed = false;
    }, 710);
  }


  logInForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  login(formValue: any) {
    this.authService.loginService(formValue, this.logInForm);
  }


  guestLogin() {
    this.authService.loginAsGuestService();
  }
}
