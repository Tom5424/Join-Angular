import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
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
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
  });


  constructor(public openDialogService: OpenDialogsService, public createNewContactService: CreateNewContactService) {

  }


  closeDialogIfClickedOutside() {
    this.openDialogService.closeDialogCreateNewContactService();
  }


  closeDialogCreateNewContact() {
    this.openDialogService.closeDialogCreateNewContactService();
  }


  stopPropagation(event: Event) {
    event.stopPropagation();
  }


  createNewContact() {
    this.createNewContactService.createNewContactService(this.createContactForm.value);
    this.createContactForm.reset();
    this.closeDialogCreateNewContact();
  }
}
