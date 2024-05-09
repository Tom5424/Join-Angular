import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss', './legal-notice.component.media.scss']
})


export class LegalNoticeComponent implements OnInit {


  constructor(public routingService: RoutingService, public router: Router) {

  }


  ngOnInit(): void {
    this.routingService.loadPreviousUrl(this.router.url);
  }
}
