import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  // contactIsSelected: boolean = false;
  // selectedContact: any;
  // tests!: Observable<any>;
  // docId: string = '';

  constructor(public openDialogService: OpenDialogsService, public createNewContactService: CreateNewContactService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.createNewContactService.getNewContactService();
    // this.activatedRoute.paramMap.subscribe((data) => {
    //   this.docId = String(data.get('id'));
    // })
    // this.createNewContactService.getSingleContactService(this.docId);

    // this.createNewContactService.contactData.subscribe((data) => {
    //   this.tests = data;
    //   data.forEach((a: any) => {
    //     this.contact = a;
    //     this.selectedContact = this.contact;
    //   })
    // })
  }


  getInitialLetterFromContact(contact: Contact) {
    return contact.initialLetter;
  }


  openDialogCreateNewContact() {
    this.openDialogService.openDialogCreateNewContactService();
  }


  selectContact(contact: any) {
    // this.contact.name = contact.name;
    // this.contact.email = contact.email;
    // this.contact.phoneNumber = contact.phoneNumber;
    // this.docId = contact.id;
    // this.selectedContact = contact;
  }
}
