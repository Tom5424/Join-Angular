import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss', './overlay.component.media.scss']
})


export class OverlayComponent {


  constructor(public authService: AuthService) {

  }
}
