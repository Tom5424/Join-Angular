import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-dialog-create-new-contact',
  templateUrl: './dialog-create-new-contact.component.html',
  styleUrls: ['./dialog-create-new-contact.component.scss']
})


export class DialogCreateNewContactComponent {
  createContactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
  });


  constructor(public openDialogService: OpenDialogsService) {

  }


  closeDialogIfClickedOutside() {
    this.openDialogService.closeDialogCreateNewContactService();
  }


  closeDialog() {
    this.openDialogService.closeDialogCreateNewContactService();
  }


  stopPropagation(event: Event) {
    event.stopPropagation();
  }


  onSubmitForm() {
    this.createContactForm.reset();
    this.closeDialog();
  }
}
