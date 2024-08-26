import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})


export class CreateNewContactService {
  contact: Contact = new Contact();
  contactData!: Observable<any>;
  randomColor: string = '';
  contactSuccessfullyCreated: boolean = false;
  userFeedbackIsDisplayedIfCreated: boolean = false;
  contactSuccessfullyEdit: boolean = false;
  userFeedbackIsDisplayedIfEdit: boolean = false;
  contactSuccessfullyDeleted: boolean = false;
  userFeedbackIsDisplayedIfDeleted: boolean = false;
  noContactsExistInDatabase: boolean = false;
  loadigContacts: boolean = false;
  contactIsSelected: boolean = false;
  contactColors: string[] = [
    '#FF7A00',
    '#FF5EB3',
    '#6E52FF',
    '#9327FF',
    '#00BEE8',
    '#1FD7C1',
    '#FF745E',
    '#FFA35E',
    '#FC71FF',
    '#FFC701',
    '#0038FF',
    '#C3FF2B',
    '#FFE62B',
    '#FF4646',
    '#FFBB2B',
  ];


  constructor(public router: Router, public authService: AuthService) {

  }


  createNewContactService(formValues: any) {

  }


  getRandomColorContactService() {
    this.randomColor = this.contactColors[Math.round(Math.random() * this.contactColors.length)]; // Generate a random between 0 and 14
  }


  hideUserFeedbackAfterContactCreatedService() {
    setTimeout(() => {
      this.contactSuccessfullyCreated = false;
    }, 1000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfCreated = false;
    }, 1500);
  }


  getNewContactService() {

  }


  updateContactService(formValues: any, docId: string) {

  }


  hideUserFeedbackAfterContactEditService() {
    setTimeout(() => {
      this.contactSuccessfullyEdit = false;
    }, 1000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfEdit = false;
    }, 1500);
  }


  deleteContactService(docId: string) {

  }


  hideUserFeedbackAfterContactDeletedService() {
    setTimeout(() => {
      this.contactSuccessfullyDeleted = false;
    }, 1000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfDeleted = false;
    }, 1500);
  }


  getSingleContactService(docId: string) {
   
  }


  checkIfContactsExistInDatabaseService() {
  
  }
}