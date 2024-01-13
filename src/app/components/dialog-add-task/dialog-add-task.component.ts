import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { CreateTaskService } from 'src/app/services/create-task.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})


export class DialogAddTaskComponent implements OnInit {
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

  dialogAddTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    description: new FormControl('', Validators.maxLength(150)),
    contacts: new FormControl(this.selectedContacts),
    dueDate: new FormControl('', Validators.required),
    prio: new FormControl(''),
    categoryName: new FormControl(this.selectedCategoryName),
    categoryColor: new FormControl(this.selectedCategoryColor),
  });


  constructor(public createNewContactService: CreateNewContactService, public createTaskService: CreateTaskService, public openDialogService: OpenDialogsService) {

  }


  ngOnInit(): void {
    this.createNewContactService.getNewContactService();
    this.createNewContactService.checkIfContactsExistInDatabaseService();
  }


  closeDialogIfClickedOutside() {
    this.openDialogService.closeDialogCreateTaskService();
  }


  stopPropagation(event: Event) {
    event.stopPropagation();
  }


  openDropdownMenuAssignContacts() {
    this.dropdownMenuAssignedToIsOpen = !this.dropdownMenuAssignedToIsOpen;
  }


  selectContact(contact: Contact) {
    let contactIndex = this.selectedContacts.indexOf(contact);
    if (contactIndex !== -1) {
      this.selectedContacts.splice(contactIndex, 1);
    } else {
      this.selectedContacts.push(contact);
    }
  }


  contactIsSelected(contact: Contact) {
    return this.selectedContacts.includes(contact);
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


  selectCategory(category: any) {
    this.selectedCategoryName = category.categoryName;
    this.selectedCategoryColor = category.categoryColor;
    this.dropdownMenuCategoryIsOpen = false;
  }


  closeDropdownIfClickOutSide() {
    this.dropdownMenuAssignedToIsOpen = false;
    this.dropdownMenuCategoryIsOpen = false;
  }


  createTask() {
    this.dialogAddTaskForm.patchValue({
      title: this.dialogAddTaskForm.controls.title.value,
      description: this.dialogAddTaskForm.controls.description.value,
      contacts: this.selectedContacts,
      dueDate: this.dialogAddTaskForm.controls.dueDate.value,
      prio: this.activePrioBtn,
      categoryName: this.selectedCategoryName,
      categoryColor: this.selectedCategoryColor,
    });
    this.createTaskService.createNewTaskService(this.dialogAddTaskForm.value, this.openDialogService.taskStatus);
    this.clearForm();
    setTimeout(() => {
      this.openDialogService.closeDialogCreateTaskService();
    }, 1000);
  }


  clearForm() {
    this.dialogAddTaskForm.reset();
    this.selectedContacts = [];
    this.activePrioBtn = '';
    this.selectedCategoryName = '';
    this.selectedCategoryColor = '';
  }
}
