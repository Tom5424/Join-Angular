import { Component } from '@angular/core';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-dialog-create-new-contact',
  templateUrl: './dialog-create-new-contact.component.html',
  styleUrls: ['./dialog-create-new-contact.component.scss']
})


export class DialogCreateNewContactComponent {


  constructor(public openDialogService: OpenDialogsService) {

  }


  closeDialogIfClickedOutside() {
    this.openDialogService.closeDialogCreateNewContactService();
  }


  closeDialog() {
    this.openDialogService.closeDialogCreateNewContactService();
  }


  stopPropagation(event: any) {
    event.stopPropagation();
  }
}
