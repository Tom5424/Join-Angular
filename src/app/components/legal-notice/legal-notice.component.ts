import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})


export class LegalNoticeComponent {


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
