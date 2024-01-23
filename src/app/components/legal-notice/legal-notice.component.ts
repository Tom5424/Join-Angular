import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss', './legal-notice.component.media.scss']
})


export class LegalNoticeComponent {


  constructor(public router: Router) {

  }


  checkNavigationForLegalNotice() {
    if (this.router.url == '/summary/legal-notice') {
      this.router.navigateByUrl('/summary');
    } else {
      this.router.navigateByUrl('/signup');
    }
  }
}
