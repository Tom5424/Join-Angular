import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})


export class SummaryComponent {


  constructor(public authService: AuthService) {

  }


  ngOnInit(): void {
    this.authService.updateDisplayedName();
  }

}
