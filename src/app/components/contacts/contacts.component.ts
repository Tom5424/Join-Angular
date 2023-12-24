import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements OnInit {
  contact: Contact = new Contact();
  contactIsSelected: boolean = false;
  selectedContact: any;


  constructor(public openDialogService: OpenDialogsService, public createNewContactService: CreateNewContactService) {

  }


  ngOnInit(): void {
    this.createNewContactService.getNewContactService();
  }


  openDialog() {
    this.openDialogService.openDialogCreateNewContactService();
  }


  selectContact(contact: any) {
    this.contact.name = contact.name
    this.contact.email = contact.email
    this.contact.phoneNumber = contact.phoneNumber
    this.selectedContact = contact;
  }
}
