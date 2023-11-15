import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {


  constructor(public authService: AuthService) {

  }


  logInForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  onSubmitForm(formValue: any) {
    this.authService.loginService(formValue, this.logInForm);
  }


  guestLogin() {
    this.authService.loginAsGuestService();
  }
}
