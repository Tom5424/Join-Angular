import { Injectable } from '@angular/core';
import { CreateNewContactService } from './create-new-contact.service';
import { Contact } from '../models/contact';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})


export class OpenDialogsService {
  overlayCreateNewContactIsDisplayed: boolean = false;
  dialogCreateNewContactIsOpen: boolean = false;
  overlayEditContactIsDisplayed: boolean = false;
  dialogEditContactIsOpen: boolean = false;
  overlayAddTaskIsDisplayed: boolean = false;
  dialogAddTaskIsOpen: boolean = false;
  overlayTaskDetailViewIsDisplayed: boolean = false;
  dialogTaskDetailViewIsOpen: boolean = false;
  dialogEditTaskIsOpen: boolean = false;
  docId: string = '';
  taskStatus: string = '';
  contact: Contact = new Contact();
  task: Task = new Task();


  constructor(public createNewContactService: CreateNewContactService) {

  }


  openDialogCreateNewContactService() {
    this.dialogCreateNewContactIsOpen = true;
    this.overlayCreateNewContactIsDisplayed = true;
  }


  closeDialogCreateNewContactService() {
    this.dialogCreateNewContactIsOpen = false;
    setTimeout(() => {
      this.overlayCreateNewContactIsDisplayed = false;
    }, 400);
  }


  openDialogEditContactService(selectedContact: Contact) {
    this.dialogEditContactIsOpen = true;
    this.overlayEditContactIsDisplayed = true;
    this.getContactDataAfterOpenDialogEditContactService(selectedContact);
  }


  getContactDataAfterOpenDialogEditContactService(selectedContact: any) {
    this.contact.name = selectedContact.name;
    this.contact.email = selectedContact.email;
    this.contact.phoneNumber = selectedContact.phoneNumber;
    this.contact.initialLetter = selectedContact.initialLetter;
    this.contact.color = selectedContact.color;
    this.docId = selectedContact.id;
  }


  closeDialogEditContactService() {
    this.dialogEditContactIsOpen = false;
    setTimeout(() => {
      this.overlayEditContactIsDisplayed = false;
    }, 400);
  }


  openDialogCreateTaskService(selectedTaskStatus: string) {
    this.taskStatus = selectedTaskStatus;
    document.body.style.overflowY = 'hidden'; // Prevent to scroll the Body if the Dialog is Open
    this.dialogAddTaskIsOpen = true;
    this.overlayAddTaskIsDisplayed = true;
  }


  closeDialogCreateTaskService() {
    document.body.style.overflowY = 'auto'; // Remove the Style after Dialog is closed
    this.dialogAddTaskIsOpen = false;
    setTimeout(() => {
      this.overlayAddTaskIsDisplayed = false;
    }, 400)
  }


  openDialogTaskDetailViewService(selectedTask: any) {
    document.body.style.overflowY = 'hidden'; // Prevent to scroll the Body if the Dialog is Open
    this.dialogTaskDetailViewIsOpen = true;
    this.overlayTaskDetailViewIsDisplayed = true;
    this.getTaskDataAfterOpenDialogTaskDetailViewService(selectedTask);
  }


  getTaskDataAfterOpenDialogTaskDetailViewService(selectedTask: any) {
    this.task.categoryName = selectedTask.categoryName;
    this.task.categoryColor = selectedTask.categoryColor;
    this.task.title = selectedTask.title;
    this.task.description = selectedTask.description;
    this.task.dueDate = selectedTask.dueDate;
    this.task.prio = selectedTask.prio;
    this.task.contacts = selectedTask.contacts;
    this.docId = selectedTask.id;
  }


  closeDialogTaskDetailViewService() {
    document.body.style.overflowY = 'auto'; // Remove the Style after Dialog is closed
    this.dialogTaskDetailViewIsOpen = false;
    setTimeout(() => {
      this.overlayTaskDetailViewIsDisplayed = false;
    }, 400);
  }


  openDialogEditTaskService() {
    this.dialogEditTaskIsOpen = true;
  }


  closeDialogEditTaskService() {
    this.dialogEditTaskIsOpen = false;
  }
}
