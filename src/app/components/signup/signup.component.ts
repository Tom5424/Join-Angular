import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, find, from, fromEvent, map, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {
  // array1: any[] = [1, 2, 3];
  // array2: any[] = ['a, b, c'];
  // datas: any[] = [];
  // @ViewChild('btn') btn!: ElementRef;
  // createBtnObservable: any;


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





  // test = new Promise((resolve, reject) => {
  //   resolve([1, 2, 3, 4, 5]);
  //   reject('asdsadsadsad');
  // });


  // myObservable = from([1, 2, 3, 4, 5]).pipe(map((value) => {
  //   return value * 10;
  // }), filter((value) => {
  //   return value % 4 == 0;
  // }));


  // transformedObservable = this.myObservable.pipe(map((value) => {
  //   return value * 10;
  // }));


  // filteredObservable = this.myObservable.pipe(map((value) => {
  //   return value * 10;
  // }), filter((value) => {
  //   return value % 4 == 0;
  // })
  // )


  // triggerObservable() {
  //   this.myObservable.subscribe({
  //     next: (value: any) => {
  //       this.datas.push(value);
  //     },
  //     error(error) {
  //       alert(error.message);
  //     },
  //     complete() {
  //       alert('Fertig junge');
  //     }
  //   });
  // }


  
// myObservable = new Observable((observe) => {
//   setTimeout(() => { observe.error(new Error('Fuck')) }, 3000);
//   observe.next(1);
//   observe.next(2);
//   observe.next(3);
//   observe.next(4);
//   observe.next(5);
//   observe.complete();
// });





// clicked() {
//   let count = 0;
//   this.createBtnObservable = fromEvent(this.btn.nativeElement, 'click').subscribe((data) => {
//     console.log(data);
//     this.create(++count);
//   })
// }


// create(count: number) {
//   let div = document.createElement('div');
//   div.innerText = 'asdsadsad' + count;
//   div.className = 'height: 10px';
//   document.getElementById('content')?.appendChild(div);
// }


// ngAfterViewInit() {
//   this.clicked();
// }


// myObservable = of(this.array1, this.array2, 465465456, 'sadsadsdsd');


