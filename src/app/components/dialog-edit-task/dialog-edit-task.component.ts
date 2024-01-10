import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { CreateTaskService } from 'src/app/services/create-task.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})


export class DialogEditTaskComponent implements OnInit {
  dropdownMenuAssignedToIsOpen: boolean = false;
  dropdownMenuCategoryIsOpen: boolean = false;
  activePrioBtn: string = '';
  priorities: string[] = ['urgent', 'medium', 'low'];
  selectedContacts: Array<Contact> = [];
  selectedCategoryName: string = '';
  selectedCategoryColor: string = '';
  categorys: { categoryName: string; categoryColor: string }[] = [
    { categoryName: 'HTML', categoryColor: '#FF7A00' },
    { categoryName: 'CSS', categoryColor: '#FF5EB3' },
    { categoryName: 'JavaScript', categoryColor: '#6E52FF' },
    { categoryName: 'Angular', categoryColor: '#9327FF' },
    { categoryName: 'UI/UX Design', categoryColor: '#00BEE8' },
    { categoryName: 'DevOps', categoryColor: '#1FD7C1' },
    { categoryName: 'Bug Fixing', categoryColor: '#FF745E' },
    { categoryName: 'Code Review', categoryColor: '#FFA35E' },
    { categoryName: 'Feature Development', categoryColor: '#FC71FF' },
    { categoryName: 'Testing', categoryColor: '#FFC701' },
    { categoryName: 'Documentation', categoryColor: '#0038FF' },
    { categoryName: 'Code Deployment', categoryColor: '#C3FF2B' },
    { categoryName: 'Meetings', categoryColor: '#FFE62B' },
    { categoryName: 'Code Refactoring', categoryColor: '#FF4646' },
    { categoryName: 'Security Enhancements', categoryColor: '#FFBB2B' },
  ]


  editTaskForm = new FormGroup({
    title: new FormControl(this.openDialogService.task.title, [Validators.required, Validators.maxLength(10)]),
    description: new FormControl(this.openDialogService.task.description, Validators.maxLength(150)),
    contacts: new FormControl(''),
    dueDate: new FormControl(this.openDialogService.task.dueDate, Validators.required),
    prio: new FormControl(''),
    categoryName: new FormControl(''),
    categoryColor: new FormControl(''),
  });


  constructor(public createNewContactService: CreateNewContactService, public createTaskService: CreateTaskService, public openDialogService: OpenDialogsService) {

  }

  ngOnInit(): void {
    this.createNewContactService.getNewContactService();
    this.selectPrio(this.openDialogService.task.prio);
    this.selectCategory(this.openDialogService.task.categoryName, this.openDialogService.task.categoryColor);
    // this.contactIsSelected(this.selectedContacts);
  }


  openDropdownMenuAssignContacts() {
    this.dropdownMenuAssignedToIsOpen = !this.dropdownMenuAssignedToIsOpen;
  }


  selectContact(selectedContacts: any) {
    // let contactIndex = this.selectedContacts.indexOf(selectedContacts);
    // if (contactIndex !== -1) {
    //   this.selectedContacts.splice(contactIndex, 1);
    // } else {
    //   this.selectedContacts.push(selectedContacts);
    // }
  }


  contactIsSelected(contact: any) {
    // return this.selectedContacts.includes(contact);
  }


  selectPrio(selectedPrio: string) {
    this.priorities.forEach((currentPrio) => {
      if (selectedPrio == currentPrio) {
        this.activePrioBtn = currentPrio;
      }
    });
  }


  openDropdownMenuCategory() {
    this.dropdownMenuCategoryIsOpen = !this.dropdownMenuCategoryIsOpen;
  }


  selectCategory(categoryName: string, categoryColor: string) {
    this.selectedCategoryName = categoryName;
    this.selectedCategoryColor = categoryColor;
    this.dropdownMenuCategoryIsOpen = false;
  }


  closeDropdownIfClickOutSide() {
    this.dropdownMenuAssignedToIsOpen = false;
    this.dropdownMenuCategoryIsOpen = false;
  }


  closeDialog(event: Event) {
    event.stopPropagation();
    this.openDialogService.closeDialogEditTaskService();
  }


  editTask() {
    this.openDialogService.closeDialogEditTaskService();
    this.editTaskForm.patchValue({
      // title: this.addTaskForm.controls.title.value,
      // description: this.addTaskForm.controls.description.value,
      // contacts: this.selectedContacts,
      // dueDate: this.addTaskForm.controls.dueDate.value,
      // prio: this.activePrioBtn,
      // categoryName: this.selectedCategoryName,
      // categoryColor: this.selectedCategoryColor,
    });
    // this.createTaskService.createNewTaskService(this.addTaskForm.value, this.openDialogService.taskStatus);
    // this.clearForm();
  }
}
