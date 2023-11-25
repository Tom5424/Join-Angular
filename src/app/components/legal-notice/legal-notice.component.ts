import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})


export class LegalNoticeComponent {


  constructor(public router: Router) {

  }


  navigateToLegalNotice() {
    if (this.router.url == '/summary/guest/legal-notice') {
      this.router.navigateByUrl('/summary/guest');
    } else {
      this.router.navigateByUrl('/signup');
    }
  }
}
