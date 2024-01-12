import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CreateTaskService } from './create-task.service';


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


  constructor(public createTaskService: CreateTaskService) {

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
    this.createTaskService.task.categoryName = selectedTask.categoryName;
    this.createTaskService.task.categoryColor = selectedTask.categoryColor;
    this.createTaskService.task.title = selectedTask.title;
    this.createTaskService.task.description = selectedTask.description;
    this.createTaskService.task.dueDate = selectedTask.dueDate;
    this.createTaskService.task.prio = selectedTask.prio;
    this.createTaskService.task.contacts = selectedTask.contacts;
    this.docId = selectedTask.id;
  }


  closeDialogTaskDetailViewService() {
    document.body.style.overflowY = 'auto'; // Remove the Style after Dialog is closed
    this.dialogTaskDetailViewIsOpen = false;
    setTimeout(() => {
      this.overlayTaskDetailViewIsDisplayed = false;
    }, 400);
  }


  openDialogEditTaskService(selectedTaskInDetailView: any, docId: string) {
    this.dialogEditTaskIsOpen = true;
    this.getTaskDataAfterOpenDialogEditTaskService(selectedTaskInDetailView, docId);
  }


  getTaskDataAfterOpenDialogEditTaskService(selectedTaskInDetailView: any, docId: string) {
    this.createTaskService.task.categoryName = selectedTaskInDetailView.categoryName;
    this.createTaskService.task.categoryColor = selectedTaskInDetailView.categoryColor;
    this.createTaskService.task.title = selectedTaskInDetailView.title;
    this.createTaskService.task.description = selectedTaskInDetailView.description;
    this.createTaskService.task.dueDate = selectedTaskInDetailView.dueDate;
    this.createTaskService.task.prio = selectedTaskInDetailView.prio;
    this.createTaskService.task.contacts = selectedTaskInDetailView.contacts;
    this.docId = docId;
  }


  closeDialogEditTaskService() {
    this.dialogEditTaskIsOpen = false;
  }
}
