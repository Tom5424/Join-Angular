import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})


export class PrivacyPolicyComponent {


  constructor(public auth: AuthService, public router: Router) {

  }


  /////////////////////////////////////////////////////////////////
  checkIfLoggedInAsGuestAndRedirectToSummaryComponent() {
    if (this.auth.loggedInAsGuest) {
      this.router.navigateByUrl('/summary/guest')
    } else {
      this.router.navigateByUrl('/signup')
    }
  }
}
