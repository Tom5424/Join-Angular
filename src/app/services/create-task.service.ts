import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Task } from '../models/tasks';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})


export class CreateTaskService {
  task: Task = new Task();
  taskSuccessfullyCreated: boolean = false;
  taskData!: Observable<any>;


  constructor(public fireStore: Firestore, public router: Router) {

  }


  createNewTaskService(formValues: any) {
    const collectionRef = collection(this.fireStore, 'tasks');
    const contactInstance = new Task(formValues);
    addDoc(collectionRef, contactInstance.toJson(formValues))
      .then(() => {
        this.taskSuccessfullyCreated = true;
      })
    setTimeout(() => {
      this.router.navigateByUrl('/board');
      this.taskSuccessfullyCreated = false;
    }, 1000);
  }


  getNewTaskService() {
    const collectionRef = collection(this.fireStore, 'tasks');
    collectionData(collectionRef, { idField: 'id' })
    this.taskData = collectionData(collectionRef, { idField: 'id' });
  }

}
