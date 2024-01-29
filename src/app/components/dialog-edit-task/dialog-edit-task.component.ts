import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { CreateNewContactService } from 'src/app/services/create-new-contact.service';
import { CreateTaskService } from 'src/app/services/create-task.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss', './dialog-edit-task.component.media.scss']
})


export class DialogEditTaskComponent implements OnInit {
  dropdownMenuCategoryIsOpen: boolean = false;
  activePrioBtn: string = '';
  priorities: string[] = ['urgent', 'medium', 'low'];
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
    title: new FormControl(this.createTaskService.task.title, [Validators.required, Validators.maxLength(10)]),
    description: new FormControl(this.createTaskService.task.description, Validators.maxLength(150)),
    dueDate: new FormControl(this.createTaskService.task.dueDate, Validators.required),
    prio: new FormControl(''),
    categoryName: new FormControl(''),
    categoryColor: new FormControl(''),
  });


  constructor(public createNewContactService: CreateNewContactService, public createTaskService: CreateTaskService, public openDialogService: OpenDialogsService) {

  }


  ngOnInit(): void {
    this.createNewContactService.getNewContactService();
    this.createNewContactService.checkIfContactsExistInDatabaseService();
    this.selectPrio(this.createTaskService.task.prio);
    this.selectCategory(this.createTaskService.task.categoryName, this.createTaskService.task.categoryColor);
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
    this.dropdownMenuCategoryIsOpen = false;
  }


  closeDialog() {
    this.openDialogService.closeDialogEditTaskService();
  }


  editTask() {
    setTimeout(() => {
      this.openDialogService.closeDialogEditTaskService();
    }, 1000);
    this.editTaskForm.patchValue({
      title: this.editTaskForm.controls.title.value,
      description: this.editTaskForm.controls.description.value,
      dueDate: this.editTaskForm.controls.dueDate.value,
      prio: this.activePrioBtn,
      categoryName: this.selectedCategoryName,
      categoryColor: this.selectedCategoryColor,
    });
    this.createTaskService.updateTaskDataService(this.editTaskForm.value, this.openDialogService.docId);
  }
}
