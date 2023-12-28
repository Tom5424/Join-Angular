import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})


export class AddTaskComponent implements OnInit {
  dropdownMenuAssignedToIsOpen: boolean = false;
  dropdownMenuCategoryIsOpen: boolean = false;
  activePrioBtn: string = '';
  selectedCategory: string = '';
  priorities: string[] = ['urgent', 'medium', 'low'];
  selectedContacts: Array<Contact> = [];

  //// Still has to move to create task service
  taskCreated: boolean = false;

  addTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    description: new FormControl('', Validators.maxLength(150)),
    contacts: new FormControl(this.selectedContacts),
    dueDate: new FormControl('', Validators.required),
    prio: new FormControl(''),
    category: new FormControl(''),
  });


  constructor(public createNewContactService: CreateNewContactService) {

  }


  ngOnInit(): void {
    this.createNewContactService.getNewContactService();
  }


  openDropdownMenuAssignedTo() {
    this.dropdownMenuAssignedToIsOpen = !this.dropdownMenuAssignedToIsOpen;
  }


  openDropdownMenuCategory() {
    this.dropdownMenuCategoryIsOpen = !this.dropdownMenuCategoryIsOpen;
  }


  closeDropdownIfClickOutSide() {
    this.dropdownMenuAssignedToIsOpen = false;
    this.dropdownMenuCategoryIsOpen = false;
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


  selectCategory(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
    this.dropdownMenuCategoryIsOpen = false;
  }


  createTask() {
    this.addTaskForm.patchValue({
      title: this.addTaskForm.controls.title.value,
      description: this.addTaskForm.controls.description.value,
      contacts: this.selectedContacts,
      dueDate: this.addTaskForm.controls.dueDate.value,
      prio: this.activePrioBtn,
      category: this.selectedCategory,
    });
    this.taskCreated = true;
    this.clearForm();
  }


  clearForm() {
    this.addTaskForm.reset();
    this.selectedContacts = [];
    this.activePrioBtn = '';
    this.selectedCategory = '';
  }
}
