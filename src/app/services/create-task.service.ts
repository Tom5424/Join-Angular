import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})


export class CreateTaskService {
  taskSuccessfullyCreated: boolean = false;
  taskSuccessfullyDeleted: boolean = false;
  userFeedbackIsDisplayedIfSuccessfullyDeleted: boolean = false;
  toDoTaskArray: any[] = [];
  inProgressTaskArray: any[] = [];
  awaitingFeebackTaskArray: any[] = [];
  doneTaskArray: any[] = [];


  constructor(public fireStore: Firestore, public router: Router) {

  }


  createNewTaskService(formValues: any, selectedTaskStatus: string) {
    const collectionRef = collection(this.fireStore, 'tasks');
    const contactInstance = new Task(formValues, selectedTaskStatus);
    addDoc(collectionRef, contactInstance.toJson(formValues, selectedTaskStatus))
      .then(() => {
        this.taskSuccessfullyCreated = true;
      })
    setTimeout(() => {
      this.taskSuccessfullyCreated = false;
      this.router.navigateByUrl('/board');
    }, 1000);
    this.getNewTaskService(selectedTaskStatus);
  }


  getNewTaskService(selectedTaskStatus: string) {
    const collectionRef = collection(this.fireStore, 'tasks');
    if (selectedTaskStatus == 'toDo') {
      return this.getToDoTaskDataService(collectionRef, selectedTaskStatus);
    } else if (selectedTaskStatus == 'inProgress') {
      return this.getInProgressTaskDataService(collectionRef, selectedTaskStatus);
    } else if (selectedTaskStatus == 'awaitingFeedback') {
      return this.getAwaitingFeedbackTaskDataService(collectionRef, selectedTaskStatus);
    } else if (selectedTaskStatus == 'done') {
      return this.getDoneTaskDataService(collectionRef, selectedTaskStatus);
    }
  }


  getToDoTaskDataService(collectionRef: CollectionReference, selectedTaskStatus: string) {
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((tasks) => {
        let filteredTask = tasks.filter((task) => task['status'] == selectedTaskStatus);
        this.toDoTaskArray = filteredTask;
      })
  }


  getInProgressTaskDataService(collectionRef: CollectionReference, selectedTaskStatus: string) {
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((tasks) => {
        let filteredTask = tasks.filter((task) => task['status'] == selectedTaskStatus);
        this.inProgressTaskArray = filteredTask;
      })
  }


  getAwaitingFeedbackTaskDataService(collectionRef: CollectionReference, selectedTaskStatus: string) {
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((tasks) => {
        let filteredTask = tasks.filter((task) => task['status'] == selectedTaskStatus);
        this.awaitingFeebackTaskArray = filteredTask;
      })
  }


  getDoneTaskDataService(collectionRef: CollectionReference, selectedTaskStatus: string) {
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((tasks) => {
        let filteredTask = tasks.filter((task) => task['status'] == selectedTaskStatus);
        this.doneTaskArray = filteredTask;
      })
  }


  updateTaskStatusService(task: any, taskStatus: string) {
    const doRef = doc(this.fireStore, 'tasks', task.id);
    updateDoc(doRef, { status: taskStatus })
      .then(() => {
        this.getNewTaskService(taskStatus);
      })
  }


  deleteTaskService(docId: string) {
    const docRef = doc(this.fireStore, 'tasks', docId);
    deleteDoc(docRef).
      then(() => {
        this.userFeedbackIsDisplayedIfSuccessfullyDeleted = true;
        this.taskSuccessfullyDeleted = true;
      })
    setTimeout(() => {
      this.taskSuccessfullyDeleted = false;
    }, 1000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfSuccessfullyDeleted = false;
    }, 1500);
  }
} 