import { Component, OnInit } from '@angular/core';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements OnInit {


  constructor(public openDialogService: OpenDialogsService, public createNewContactService: CreateNewContactService) {

  }


  ngOnInit(): void {
    this.createNewContactService.getNewContactService();
  }


  openDialog() {
    this.openDialogService.openDialogCreateNewContactService();
  }
}
