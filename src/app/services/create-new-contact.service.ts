import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData, addDoc, updateDoc, getDoc, getDocs, doc, deleteDoc, query, orderBy } from '@angular/fire/firestore';
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


  constructor(public fireStore: Firestore, public router: Router, public authService: AuthService) {

  }


  createNewContactService(formValues: any) {
    this.authService.userId = localStorage.getItem('isLoggedIn');
    this.getRandomColorContactService();
    const collectionRef = collection(this.fireStore, 'contacts');
    const contactInstance = new Contact(formValues, this.randomColor, this.authService.userId);
    addDoc(collectionRef, contactInstance.toJson(formValues, this.randomColor, this.authService.userId))
      .then(() => {
        this.contactSuccessfullyCreated = true;
        this.userFeedbackIsDisplayedIfCreated = true;
        this.checkIfContactsExistInDatabaseService();
      })
    this.hideUserFeedbackAfterContactCreatedService();
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
    this.authService.userId = localStorage.getItem('isLoggedIn');
    this.loadigContacts = true;
    const collectionRef = query(collection(this.fireStore, 'contacts'), orderBy('initialLetter'));
    this.contactData = collectionData(collectionRef, { idField: 'id' });
    collectionData(collectionRef, { idField: 'id' })
      .subscribe(() => {
        this.loadigContacts = false;
      })
  }


  updateContactService(formValues: any, docId: string) {
    const docRef = doc(this.fireStore, 'contacts', docId);
    const contactInstance = new Contact(formValues);
    updateDoc(docRef, { name: contactInstance.name, email: contactInstance.email, phoneNumber: contactInstance.phoneNumber, initialLetter: contactInstance.initialLetter })
      .then(() => {
        this.contactSuccessfullyEdit = true;
        this.userFeedbackIsDisplayedIfEdit = true;
      })
    this.hideUserFeedbackAfterContactEditService();
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
    const docRef = doc(this.fireStore, 'contacts', docId);
    deleteDoc(docRef)
      .then(() => {
        this.contactIsSelected = false;
        this.contactSuccessfullyDeleted = true;
        this.userFeedbackIsDisplayedIfDeleted = true;
        this.checkIfContactsExistInDatabaseService();
      })
    this.hideUserFeedbackAfterContactDeletedService();
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
    const docRef = doc(this.fireStore, 'contacts', docId);
    getDoc(docRef)
      .then((docDate) => {
        if (docDate.exists()) {
          this.contact = docDate.data() as Contact;
        }
      })
  }


  checkIfContactsExistInDatabaseService() {
    const collectionRef = collection(this.fireStore, 'contacts');
    getDocs(collectionRef)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          this.noContactsExistInDatabase = querySnapshot.empty;
        } else {
          this.noContactsExistInDatabase = false;
        }
      })
  }
}
