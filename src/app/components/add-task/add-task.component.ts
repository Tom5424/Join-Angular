import { Component } from '@angular/core';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})


export class AddTaskComponent {
  arrowIconIsRotated: boolean = false;
  dropdownMenuIsActive: boolean = false;


  openDropdown() {
    this.arrowIconIsRotated = !this.arrowIconIsRotated;
    this.dropdownMenuIsActive = !this.dropdownMenuIsActive;
  }
}
