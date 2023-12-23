import { Component } from '@angular/core';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent {


  constructor(public openDialogService: OpenDialogsService) {

  }


  openDialog() {
    this.openDialogService.openDialogCreateNewContactService();
  }
}
