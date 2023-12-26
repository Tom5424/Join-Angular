import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData, addDoc, updateDoc, getDoc, doc, deleteDoc, query, orderBy } from '@angular/fire/firestore';


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
      .then((docData) => {
        this.contactSuccessfullyCreated = true;
        this.userFeedbackIsDisplayedIfCreated = true;
        this.router.navigate(['/contacts/contact/', docData.id]);
      })
    this.hideUserFeedbackAfterContactCreatedService();
  }


  hideUserFeedbackAfterContactCreatedService() {
    setTimeout(() => {
      this.contactSuccessfullyCreated = false;
    }, 2000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfCreated = false;
    }, 3000);
  }


  getRandomColorContactService() {
    this.randomColor = this.contactColors[Math.round(Math.random() * this.contactColors.length)]; // Generate a random between 0 and 14
  }


  getNewContactService() {
    const collectionRef = query(collection(this.fireStore, 'contacts'), orderBy('initialLetter'));
    collectionData(collectionRef, { idField: 'id' })
    this.contactData = collectionData(collectionRef, { idField: 'id' });
  }


  getSingleContactService(docId: string) {
    const docRef = doc(this.fireStore, 'contacts', docId);
    getDoc(docRef)
      .then((docDate) => {
        if (docDate.exists()) {
          this.contact = docDate.data() as Contact;
        } else {
          this.router.navigateByUrl('/contacts');
        }
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
    }, 2000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfEdit = false;
    }, 3000);
  }


  deleteContactService(docId: string) {
    const docRef = doc(this.fireStore, 'contacts', docId);
    deleteDoc(docRef)
      .then(() => {
        this.router.navigateByUrl('/contacts');
      })
  }
}
