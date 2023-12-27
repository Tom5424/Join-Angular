import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-dialog-edit-contact',
  templateUrl: './dialog-edit-contact.component.html',
  styleUrls: ['./dialog-edit-contact.component.scss']
})


export class DialogEditContactComponent {


  editContactForm = new FormGroup({
    name: new FormControl(this.openDialogService.contact.name, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(this.openDialogService.contact.email, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    phoneNumber: new FormControl(this.openDialogService.contact.phoneNumber, [Validators.required, Validators.maxLength(15), Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
  });


  constructor(public openDialogService: OpenDialogsService, public createNewContactService: CreateNewContactService) {

  }


  closeDialogIfClickedOutside() {
    this.openDialogService.closeDialogEditContactService();
  }


  closeDialogEditContact() {
    this.openDialogService.closeDialogEditContactService();
  }


  stopPropagation(event: Event) {
    event.stopPropagation();
  }


  saveEditedContact() {
    this.createNewContactService.updateContactService(this.editContactForm.value, this.openDialogService.docId);
    this.closeDialogEditContact();
  }


  deleteContact() {
    this.createNewContactService.deleteContactService(this.openDialogService.docId);
    this.closeDialogEditContact();
  }
}
