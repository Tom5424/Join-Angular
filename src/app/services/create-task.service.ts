import { Injectable } from '@angular/core';
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


  constructor(public router: Router) {

  }


  createNewTaskService(formValues: any, selectedTaskStatus: string) {

  }


  getNewTaskService(selectedTaskStatus: string) {

  }


  getToDoTaskDataService(selectedTaskStatus: string) {
    
  }


  getInProgressTaskDataService(selectedTaskStatus: string) {

  }


  getAwaitingFeedbackTaskDataService(selectedTaskStatus: string) {

  }


  getDoneTaskDataService(selectedTaskStatus: string) {

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

  }


  updateTaskDataService(formValues: any, docId: string) {

  }


  hideUserFeedbackAfterTaskEditService() {
    setTimeout(() => {
      this.taskSuccessfullyEdit = false;
    }, 1000);
  }


  getSnapShotFromEditTaskService() {

  }


  deleteTaskService(docId: string) {
    
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