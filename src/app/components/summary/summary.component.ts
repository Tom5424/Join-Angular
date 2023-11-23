import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})


export class SummaryComponent implements OnInit {


  constructor(public auth: AuthService) {

  }


  ngOnInit(): void {
    this.auth.loginAsGuestService();
  }
}
