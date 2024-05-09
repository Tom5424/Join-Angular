import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', './sidebar.component.media.scss']
})


export class SidebarComponent implements OnInit{


  constructor(public router: Router, public routingService: RoutingService) {

  }


  ngOnInit(): void {
    this.routingService.loadPreviousUrl(this.router.url);
  }
}
