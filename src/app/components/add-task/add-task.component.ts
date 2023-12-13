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
  priorities: string[] = ['urgent', 'medium', 'low'];


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
    this.priorities.forEach((currentPrio) => {
      if (selectedPrio == currentPrio) {
        this.currentSelectedPrio = currentPrio;
      }
    });
  }


  closeDropdownIfClickOutSide() {
    this.dropdownMenuAssignedToIsOpen = false;
    this.dropdownMenuCategoryIsOpen = false;
  }
}
