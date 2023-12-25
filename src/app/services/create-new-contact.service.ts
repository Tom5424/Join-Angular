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
  // contactColors: string[] = [
  //   '#FF7A00',
  //   '#FF5EB3',
  //   '#6E52FF',
  //   '#9327FF',
  //   '#00BEE8',
  //   '#1FD7C1',
  //   '#FF745E',
  //   '#FFA35E',
  //   '#FC71FF',
  //   '#FFC701',
  //   '#0038FF',
  //   '#C3FF2B',
  //   '#FFE62B',
  //   '#FF4646',
  //   '#FFBB2B',
  // ];


  constructor(public fireStore: Firestore) {

  }


  createNewContactService(formValues: any) {
    const collectionRef = collection(this.fireStore, 'contacts');
    const contactInstance = new Contact(formValues);
    addDoc(collectionRef, contactInstance.toJson(formValues));
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
    updateDoc(docRef, this.contact.toJson(new Contact(formValues)))
    // onSnapshot(docRef, (docData) => {
    //   this.contact.name = docData.get('name');
    //   docData.get('email');
    //   docData.get('phoneNumber');
    // });
  }
}
