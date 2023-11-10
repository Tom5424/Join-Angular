import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {


  constructor(public authService: AuthService) {

  }


  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(50)]),
    acceptPrivacyPolicy: new FormControl('', Validators.required),
  });


  onSubmitForm(formValue: any) {
    this.authService.signupService(formValue, this.signupForm);
  }
}


// myObservable = new Observable((observe) => {
//   setTimeout(() => { observe.error(new Error('Fuck')) }, 3000);
//   observe.next(1);
//   observe.next(2);
//   observe.next(3);
//   observe.next(4);
//   observe.next(5);
//   observe.complete();
// });


// triggerObservable() {
//   this.myObservable.subscribe({
//     next: (value: any) => {
//       this.data.push(value);
//     },
//     error(error) {
//       alert(error.message);
//     },
//     complete() {
//       alert('Fertig junge');
//     }
//   });
// }