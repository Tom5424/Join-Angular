import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CreateNewContactService {
  contact: Contact = new Contact();
  contactData!: Observable<any>;


  constructor(public fireStore: Firestore) {

  }


  createNewContactService(formValues: any) {
    const collectionRef = collection(this.fireStore, 'contacts');
    addDoc(collectionRef, this.contact.toJson(new Contact(formValues)));
  }


  getNewContactService() {
    const collectionRef = collection(this.fireStore, 'contacts');
    collectionData(collectionRef)
    this.contactData = collectionData(collectionRef);
  }
}
