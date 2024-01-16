import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgot-my-password',
  templateUrl: './forgot-my-password.component.html',
  styleUrls: ['./forgot-my-password.component.scss']
})


export class ForgotMyPasswordComponent {


  constructor(public authService: AuthService) {

  }


  forgotMyPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
  });


  sendMailToResetPassword() {
    this.authService.resetPasswordService(this.forgotMyPasswordForm.value, this.forgotMyPasswordForm);
  }
}
