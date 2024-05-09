import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss', './contacts.component.media.scss']
})


export class ContactsComponent implements OnInit {
  contact: Contact = new Contact();
  selectedContact: any;
  @ViewChild('containerContactListDetailView') containerContactListDetailView!: ElementRef;
  @ViewChild('containerContactList') containerContactList!: ElementRef;


  constructor(public openDialogService: OpenDialogsService, public createNewContactService: CreateNewContactService, public renderer: Renderer2, public routingService: RoutingService, public router: Router) {

  }


  ngOnInit(): void {
    this.routingService.savePreviousUrl(this.router.url);
    this.createNewContactService.getNewContactService();
    this.createNewContactService.checkIfContactsExistInDatabaseService();
    this.createNewContactService.contactIsSelected = false;
  }


  getInitialLetterFromContact(contact: Contact) {
    return contact.initialLetter;
  }


  openDialogCreateNewContact() {
    this.openDialogService.openDialogCreateNewContactService();
  }


  selectContact(contact: Contact) {
    this.createNewContactService.contactIsSelected = true;
    this.contact = contact;
    this.selectedContact = contact;
    this.displayMobileViewContactDetailView();
  }


  displayMobileViewContactDetailView() {
    if (window.innerWidth <= 1000) {
      this.renderer.addClass(this.containerContactList.nativeElement, 'hide');
      this.renderer.addClass(this.containerContactListDetailView.nativeElement, 'show');
    }
  }


  displayMobileViewContactList() {
    this.renderer.removeClass(this.containerContactList.nativeElement, 'hide');
    this.renderer.removeClass(this.containerContactListDetailView.nativeElement, 'show');
  }
}
