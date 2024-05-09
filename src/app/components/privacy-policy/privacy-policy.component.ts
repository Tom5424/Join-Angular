import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss', './privacy-policy.component.media.scss'],
})


export class PrivacyPolicyComponent implements OnInit{


  constructor(public router: Router, public routingService: RoutingService) {

  }


  ngOnInit(): void {
    this.routingService.loadPreviousUrl(this.router.url);
  }
}
