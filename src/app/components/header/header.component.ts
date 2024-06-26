import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.media.scss']
})


export class HeaderComponent implements OnInit {


  constructor(public router: Router, public authService: AuthService, public routingService: RoutingService) {

  }


  ngOnInit(): void {
    this.routingService.loadPreviousUrl(this.router.url);
    this.authService.loadDisplayedNameService();
  }


  logout() {
    this.authService.logoutService();
  }
}
