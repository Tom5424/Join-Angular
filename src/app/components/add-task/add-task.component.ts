import { Component } from '@angular/core';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})


export class AddTaskComponent {
  dropdownMenuAssignedToIsOpen: boolean = false;
  dropdownMenuCategoryIsOpen: boolean = false;
  contactIsSelected: boolean = false;
  currentSelectedPrio: string = '';


  openDropdownMenuAssignedTo() {
    this.dropdownMenuAssignedToIsOpen = !this.dropdownMenuAssignedToIsOpen;
  }


  selectContact() {
    this.contactIsSelected = !this.contactIsSelected;
  }


  openDropdownMenuCategory() {
    this.dropdownMenuCategoryIsOpen = !this.dropdownMenuCategoryIsOpen;
  }


  selectPrio(selectedPrio: string) {
    switch (selectedPrio) {
      case 'Urgent':
        this.currentSelectedPrio = 'Urgent';
        break;
      case 'Medium':
        this.currentSelectedPrio = 'Medium';
        break;
      case 'Low':
        this.currentSelectedPrio = 'Low';
        break;
    }
  }


  closeDropdownIfClickOutSide() {
    this.dropdownMenuAssignedToIsOpen = false;
    this.dropdownMenuCategoryIsOpen = false;
  }
}
