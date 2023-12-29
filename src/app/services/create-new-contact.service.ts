import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData, addDoc, updateDoc, getDoc, getDocs, doc, deleteDoc, query, orderBy } from '@angular/fire/firestore';


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


  constructor(public fireStore: Firestore, public router: Router) {

  }


  createNewContactService(formValues: any) {
    this.getRandomColorContactService();
    const collectionRef = collection(this.fireStore, 'contacts');
    const contactInstance = new Contact(formValues, this.randomColor);
    addDoc(collectionRef, contactInstance.toJson(formValues, this.randomColor))
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
    }, 2000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfCreated = false;
    }, 3000);
  }


  getNewContactService() {
    this.loadigContacts = true;
    const collectionRef = query(collection(this.fireStore, 'contacts'), orderBy('initialLetter'));
    collectionData(collectionRef, { idField: 'id' })
      .subscribe(() => {
        this.loadigContacts = false;
      })
    this.contactData = collectionData(collectionRef, { idField: 'id' });
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
    }, 2000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfEdit = false;
    }, 3000);
  }


  deleteContactService(docId: string) {
    const docRef = doc(this.fireStore, 'contacts', docId);
    deleteDoc(docRef)
      .then(() => {
        this.contactIsSelected = false;
        this.checkIfContactsExistInDatabaseService();
      })
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
