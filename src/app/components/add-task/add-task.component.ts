import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})


export class AddTaskComponent {
  dropdownMenuAssignedToIsOpen: boolean = false;
  dropdownMenuCategoryIsOpen: boolean = false;
  contactIsSelected: boolean = false;
  activePrio: string = '';
  selectedCategory: string = '';
  priorities: string[] = ['urgent', 'medium', 'low'];


  addTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    assignedTo: new FormControl(''),
    dueDate: new FormControl(''),
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


  selectContact() {
    this.contactIsSelected = !this.contactIsSelected;
  }


  selectPrio(selectedPrio: string) {
    this.priorities.forEach((currentPrio) => {
      if (selectedPrio == currentPrio) {
        this.activePrio = currentPrio;
      }
    });
  }


  selectCategory(text: string) { // rename Parameter text
    this.selectedCategory = text;
    this.dropdownMenuCategoryIsOpen = false;
  }


  onSubmitForm() {
    this.addTaskForm.patchValue({
      title: this.addTaskForm.controls.title.value,
      description: this.addTaskForm.controls.description.value,
      dueDate: this.addTaskForm.controls.dueDate.value,
      category: this.selectedCategory,
    });
  }


  clearForm() {
    this.addTaskForm.reset();
    this.activePrio = '';
    this.selectedCategory = '';
  }
}
