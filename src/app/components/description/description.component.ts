import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss', './description.component.media.scss']
})


export class DescriptionComponent {


  constructor(public router: Router, public routingService: RoutingService) {

  }


  ngOnInit(): void {
    this.routingService.loadPreviousUrl(this.router.url);
  }
}

