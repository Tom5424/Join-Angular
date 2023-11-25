import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})


export class PrivacyPolicyComponent {


  constructor(public router: Router) {

  }


  navigateToPrivacyPolicy() {
    if (this.router.url == '/summary/guest/privacy-policy') {
      this.router.navigateByUrl('/summary/guest');
    } else {
      this.router.navigateByUrl('/signup');
    }
  }
}
