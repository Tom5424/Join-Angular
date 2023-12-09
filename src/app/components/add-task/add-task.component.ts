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


  openDropdownMenuAssignedTo() {
    this.dropdownMenuAssignedToIsOpen = !this.dropdownMenuAssignedToIsOpen;
  }


  selectContact() {
    this.contactIsSelected = !this.contactIsSelected;
  }


  openDropdownMenuCategory() {
    this.dropdownMenuCategoryIsOpen = !this.dropdownMenuCategoryIsOpen;
  }
}
