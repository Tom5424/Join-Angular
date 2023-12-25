import { Injectable } from '@angular/core';
import { CreateNewContactService } from './create-new-contact.service';
import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})


export class OpenDialogsService {
  overlayCreateNewContactIsDisplayed: boolean = false;
  dialogCreateNewContactIsOpen: boolean = false;
  dialogEditContactIsOpen: boolean = false;
  overlayEditContactIsDisplayed: boolean = false;
  // docId: string = '';
  contact: Contact = new Contact();


  constructor(public createNewContactService: CreateNewContactService) {

  }


  openDialogCreateNewContactService() {
    this.dialogCreateNewContactIsOpen = true;
    this.overlayCreateNewContactIsDisplayed = true;
  }


  closeDialogCreateNewContactService() {
    this.dialogCreateNewContactIsOpen = false;
    setTimeout(() => {
      this.overlayCreateNewContactIsDisplayed = false;
    }, 400);
  }


  openDialogEditContactService(contact: Contact) {
    this.dialogEditContactIsOpen = true;
    this.overlayEditContactIsDisplayed = true;
    this.getContactDataAfterOpenDialogEditContactService(contact);
    // this.docId = docId;
  }


  getContactDataAfterOpenDialogEditContactService(contact: Contact) {
    this.contact.name = contact.name;
    this.contact.email = contact.email;
    this.contact.phoneNumber = contact.phoneNumber;
    this.contact.initialLetter = contact.initialLetter;
    this.contact.color = contact.color;
  }


  closeDialogEditContactService() {
    this.dialogEditContactIsOpen = false;
    setTimeout(() => {
      this.overlayEditContactIsDisplayed = false;
    }, 400);
  }
}
