import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})


export class AddTaskComponent {
  dropdownMenuAssignedToIsOpen: boolean = false;
  dropdownMenuCategoryIsOpen: boolean = false;
  contactIsSelected: boolean = false;
  selectedContact: string = '';
  activePrioBtn: string = '';
  selectedCategory: string = '';
  priorities: string[] = ['urgent', 'medium', 'low'];


  addTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    description: new FormControl('', Validators.maxLength(50)),
    assignedTo: new FormControl(''),
    dueDate: new FormControl('', Validators.required),
    prio: new FormControl(''),
    category: new FormControl(''),
  });


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


  selectContact(selectedContact: string) {
    this.contactIsSelected = !this.contactIsSelected;
    if (this.contactIsSelected) {
      this.selectedContact = selectedContact;
    } else {
      this.selectedContact = '';
    }
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


  onSubmitForm() {
    this.addTaskForm.patchValue({
      title: this.addTaskForm.controls.title.value,
      description: this.addTaskForm.controls.description.value,
      assignedTo: this.selectedContact,
      dueDate: this.addTaskForm.controls.dueDate.value,
      prio: this.activePrioBtn,
      category: this.selectedCategory,
    });
    this.clearForm();
  }


  clearForm() {
    this.addTaskForm.reset();
    this.contactIsSelected = false;
    this.selectedContact = '';
    this.activePrioBtn = '';
    this.selectedCategory = '';
  }
}
