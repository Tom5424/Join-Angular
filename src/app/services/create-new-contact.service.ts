import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, updateDoc, getDoc, doc, query, orderBy, onSnapshot } from '@angular/fire/firestore';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CreateNewContactService {
  contact: Contact = new Contact();
  contactData!: Observable<any>;
  randomColor: string = '';
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


  constructor(public fireStore: Firestore) {

  }


  createNewContactService(formValues: any) {
    this.getRandomColorContactService();
    const collectionRef = collection(this.fireStore, 'contacts');
    const contactInstance = new Contact(formValues, this.randomColor);
    addDoc(collectionRef, contactInstance.toJson(formValues, this.randomColor));
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
        this.contact = docDate.data() as Contact;
      })
  }


  updateContactService(formValues: any, docId: string) {
    const docRef = doc(this.fireStore, 'contacts', docId);
    const contactInstance = new Contact(formValues);
    updateDoc(docRef, {
      name: contactInstance.name,
      email: contactInstance.email,
      phoneNumber: contactInstance.phoneNumber,
      initialLetter: contactInstance.initialLetter,
    });
  }
}
