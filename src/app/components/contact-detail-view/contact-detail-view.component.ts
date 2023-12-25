import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-contact-detail-view',
  templateUrl: './contact-detail-view.component.html',
  styleUrls: ['./contact-detail-view.component.scss']
})


export class ContactDetailViewComponent implements OnInit, DoCheck {
  docId: string = '';


  constructor(public openDialogService: OpenDialogsService, public createNewContactService: CreateNewContactService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.docId = String(data.get('id'));
    })
  }


  ngDoCheck(): void {
    this.createNewContactService.getSingleContactService(this.docId);
  }


  openDialogEditContact() {
    this.openDialogService.openDialogEditContactService();
  }
}
