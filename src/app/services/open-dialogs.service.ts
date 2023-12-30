import { Injectable } from '@angular/core';
import { CreateNewContactService } from './create-new-contact.service';
import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})


export class OpenDialogsService {
  overlayCreateNewContactIsDisplayed: boolean = false;
  dialogCreateNewContactIsOpen: boolean = false;
  overlayEditContactIsDisplayed: boolean = false;
  dialogEditContactIsOpen: boolean = false;
  overlayAddTaskIsDisplayed: boolean = false;
  dialogAddTaskIsOpen: boolean = false;
  docId: string = '';
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


  openDialogEditContactService(selectedContact: Contact) {
    this.dialogEditContactIsOpen = true;
    this.overlayEditContactIsDisplayed = true;
    this.getContactDataAfterOpenDialogEditContactService(selectedContact);
  }


  getContactDataAfterOpenDialogEditContactService(selectedContact: any) {
    this.contact.name = selectedContact.name;
    this.contact.email = selectedContact.email;
    this.contact.phoneNumber = selectedContact.phoneNumber;
    this.contact.initialLetter = selectedContact.initialLetter;
    this.contact.color = selectedContact.color;
    this.docId = selectedContact.id;
  }


  closeDialogEditContactService() {
    this.dialogEditContactIsOpen = false;
    setTimeout(() => {
      this.overlayEditContactIsDisplayed = false;
    }, 400);
  }


  openDialogCreateTaskService() {
    this.dialogAddTaskIsOpen = true;
    this.overlayAddTaskIsDisplayed = true;
  }


  closeDialogCreateTaskService() {
    this.dialogAddTaskIsOpen = false;
    setTimeout(() => {
      this.overlayAddTaskIsDisplayed = false;
    }, 400)
  }
}
