import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  emailIsNotValid: boolean = false;
  passwordIsNotValid: boolean = false;


  logInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/), Validators.maxLength(64)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });


  onSubmitForm() {
    if (this.logInForm.valid) {
      console.log(this.logInForm.value);
    } else {
      this.emailIsNotValid = true;
      this.passwordIsNotValid = true;
      console.log('Fail blyyat');
    }
  }
}
