import { Component, DoCheck, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-contact-detail-view',
  templateUrl: './contact-detail-view.component.html',
  styleUrls: ['./contact-detail-view.component.scss', './contact-detail-view.component.media.scss']
})


export class ContactDetailViewComponent implements DoCheck {
  @Input() selectedContact!: any;
  docId: string = '';


  constructor(public openDialogService: OpenDialogsService, public createNewContactService: CreateNewContactService) {

  }


  ngDoCheck(): void {
    this.docId = this.selectedContact.id;
    this.createNewContactService.getSingleContactService(this.docId);
  }


  openDialogEditContact(selectedContact: Contact) {
    this.openDialogService.openDialogEditContactService(selectedContact);
  }


  deleteContact() {
    this.createNewContactService.deleteContactService(this.docId);
  }
}
