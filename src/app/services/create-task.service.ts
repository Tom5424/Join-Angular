import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc, onSnapshot, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})


export class CreateTaskService {
  taskSuccessfullyCreated: boolean = false;
  taskSuccessfullyEdit: boolean = false;
  taskSuccessfullyDeleted: boolean = false;
  userFeedbackIsDisplayedIfSuccessfullyDeleted: boolean = false;
  toDoTaskArray: any[] = [];
  inProgressTaskArray: any[] = [];
  awaitingFeebackTaskArray: any[] = [];
  doneTaskArray: any[] = [];
  filteredTasksAfterUrgentPrio: any[] = [];
  nextDueDate: any;
  loadTaskNumbersInSummary: boolean = false;
  task: Task = new Task();
  allTasks: any[] = [];


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
    this.loadTaskNumbersInSummary = true;
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((tasks) => {
        this.filteredTasksAfterUrgentPrio = tasks.filter((task) => task['prio'] == 'urgent'); // Filters the created tasks by urgent priority to display them in the summary correctly
        this.getNextDueDateFromUrgentTasks(this.filteredTasksAfterUrgentPrio);
        let filteredTask = tasks.filter((task) => task['status'] == selectedTaskStatus);
        this.toDoTaskArray = filteredTask;
        this.loadTaskNumbersInSummary = false;
      })
  }


  getInProgressTaskDataService(collectionRef: CollectionReference, selectedTaskStatus: string) {
    this.loadTaskNumbersInSummary = true;
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((tasks) => {
        this.filteredTasksAfterUrgentPrio = tasks.filter((task) => task['prio'] == 'urgent'); // Filters the created tasks by urgent priority to display them in the summary correctly
        this.getNextDueDateFromUrgentTasks(this.filteredTasksAfterUrgentPrio);
        let filteredTask = tasks.filter((task) => task['status'] == selectedTaskStatus);
        this.inProgressTaskArray = filteredTask;
        this.loadTaskNumbersInSummary = false;
      })
  }


  getAwaitingFeedbackTaskDataService(collectionRef: CollectionReference, selectedTaskStatus: string) {
    this.loadTaskNumbersInSummary = true;
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((tasks) => {
        this.filteredTasksAfterUrgentPrio = tasks.filter((task) => task['prio'] == 'urgent'); // Filters the created tasks by urgent priority to display them in the summary correctly
        this.getNextDueDateFromUrgentTasks(this.filteredTasksAfterUrgentPrio);
        let filteredTask = tasks.filter((task) => task['status'] == selectedTaskStatus);
        this.awaitingFeebackTaskArray = filteredTask;
        this.loadTaskNumbersInSummary = false;
      })
  }


  getDoneTaskDataService(collectionRef: CollectionReference, selectedTaskStatus: string) {
    this.loadTaskNumbersInSummary = true;
    collectionData(collectionRef, { idField: 'id' })
      .subscribe((tasks) => {
        this.filteredTasksAfterUrgentPrio = tasks.filter((task) => task['prio'] == 'urgent'); // Filters the created tasks by urgent priority to display them in the summary correctly
        this.getNextDueDateFromUrgentTasks(this.filteredTasksAfterUrgentPrio);
        let filteredTask = tasks.filter((task) => task['status'] == selectedTaskStatus);
        this.doneTaskArray = filteredTask;
        this.loadTaskNumbersInSummary = false;
      })
  }


  getNextDueDateFromUrgentTasks(filteredTasksAfterUrgentPrio: any[]) {
    if (filteredTasksAfterUrgentPrio.length === 0) {
      this.nextDueDate = '';
      return;
    }
    this.nextDueDate = filteredTasksAfterUrgentPrio.reduce((prevoiusFilteredTasksAfterUrgentPrio, currentFilteredTasksAfterUrgentPrio) => {
      const previousDate = prevoiusFilteredTasksAfterUrgentPrio.dueDate;
      const currentDate = currentFilteredTasksAfterUrgentPrio.dueDate;
      return previousDate < currentDate ? prevoiusFilteredTasksAfterUrgentPrio : currentFilteredTasksAfterUrgentPrio;
    });
  }


  updateTaskStatusService(task: any, taskStatus: string) {
    const doRef = doc(this.fireStore, 'tasks', task.id);
    updateDoc(doRef, { status: taskStatus })
      .then(() => {
        this.getNewTaskService(taskStatus);
      })
  }


  updateTaskDataService(formValues: any, docId: string) {
    const docRef = doc(this.fireStore, 'tasks', docId);
    updateDoc(docRef, {
      title: formValues.title,
      description: formValues.description,
      dueDate: formValues.dueDate,
      prio: formValues.prio,
      categoryName: formValues.categoryName,
      categoryColor: formValues.categoryColor,
    })
      .then(() => {
        this.taskSuccessfullyEdit = true;
      })
    this.hideUserFeedbackAfterTaskEditService();
    this.getSnapShotFromEditTaskService(docRef);
  }


  hideUserFeedbackAfterTaskEditService() {
    setTimeout(() => {
      this.taskSuccessfullyEdit = false;
    }, 1000);
  }


  getSnapShotFromEditTaskService(docRef: DocumentReference) {
    onSnapshot(docRef, (doc) => {
      this.task = doc.data() as Task;
    });
  }


  deleteTaskService(docId: string) {
    const docRef = doc(this.fireStore, 'tasks', docId);
    deleteDoc(docRef).
      then(() => {
        this.userFeedbackIsDisplayedIfSuccessfullyDeleted = true;
        this.taskSuccessfullyDeleted = true;
      })
    this.hideUserFeedbackAfterTaskDeletedService();
  }


  hideUserFeedbackAfterTaskDeletedService() {
    setTimeout(() => {
      this.taskSuccessfullyDeleted = false;
    }, 1000);
    setTimeout(() => {
      this.userFeedbackIsDisplayedIfSuccessfullyDeleted = false;
    }, 1500);
  }
} 