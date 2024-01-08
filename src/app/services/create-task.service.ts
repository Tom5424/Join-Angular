import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})


export class CreateTaskService {
  taskSuccessfullyCreated: boolean = false;
  toDoTaskArray: any[] = [];
  inProgressTaskArray: any[] = [];
  awaitingFeebackTaskArray: any[] = [];
  doneTaskArray: any[] = [];


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
      this.taskSuccessfullyCreated = false;
      this.router.navigateByUrl('/board');
    }, 1000);
  }


  getNewTaskService(taskStatus: string) {
    const collectionRef = collection(this.fireStore, 'tasks');
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((data) => {
        this.toDoTaskArray = data;
      })
  }


  // updateTaskStatus(task: any, taskStatus: string) {
  //   const doRef = doc(this.fireStore, 'tasks', task.id);
  //   const b = JSON.stringify(task);
  //   updateDoc(doRef, JSON.parse(b))
  //   // .then(() => {
  //   //   this.getNewTaskService(taskStatus);
  //   // })
  // }
} 