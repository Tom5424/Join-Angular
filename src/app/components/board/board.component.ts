import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { CreateTaskService } from 'src/app/services/create-task.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss', './board.component.media.scss']
})


export class BoardComponent implements OnInit {
  @ViewChild('inputFindTask') inputFindTask!: ElementRef;
  inputValue: string = '';


  constructor(public renderer: Renderer2, public createTaskService: CreateTaskService, public openDialogService: OpenDialogsService, public routingService: RoutingService, public router: Router) {

  }


  ngOnInit(): void {
    this.routingService.savePreviousUrl(this.router.url)
    this.updateHTML();
  }


  updateHTML() {
    this.createTaskService.getNewTaskService('toDo');
    this.createTaskService.getNewTaskService('inProgress');
    this.createTaskService.getNewTaskService('awaitingFeedback');
    this.createTaskService.getNewTaskService('done');
  }


  searchForTasks(event: any) {
    this.inputValue = event.target.value.toLowerCase();
    this.createTaskService.allTasks = [
      ...this.createTaskService.toDoTaskArray,
      ...this.createTaskService.inProgressTaskArray,
      ...this.createTaskService.awaitingFeebackTaskArray,
      ...this.createTaskService.doneTaskArray
    ];
    this.filterTasksBySearchValue(this.createTaskService.allTasks, this.inputValue);
  }


  filterTasksBySearchValue(tasks: Task[], inputValue: string) {
    const filteredTasks = tasks.filter((task) =>
      task.categoryName.toLowerCase().includes(inputValue) ||
      task.title.toLowerCase().includes(inputValue) ||
      task.prio.toLowerCase().includes(inputValue)
    );
    this.getSearchResult(filteredTasks);
  }


  getSearchResult(filteredTasks: Task[]) {
    if (this.inputValue.length == 0) {
      this.updateHTML();
    } else {
      this.updateTaskArraysBasedOnSearchValue(filteredTasks);
    }
  }


  updateTaskArraysBasedOnSearchValue(filteredTasksCategory: Task[]) {
    this.createTaskService.toDoTaskArray = filteredTasksCategory.filter((task) => task.status == 'toDo');
    this.createTaskService.inProgressTaskArray = filteredTasksCategory.filter((task) => task.status == 'inProgress');
    this.createTaskService.awaitingFeebackTaskArray = filteredTasksCategory.filter((task) => task.status == 'awaitingFeedback');
    this.createTaskService.doneTaskArray = filteredTasksCategory.filter((task) => task.status == 'done');
  }


  focusInput() {
    this.renderer.selectRootElement(this.inputFindTask.nativeElement).focus();
  }


  openDialogAddTask(selectedTaskStatus: string) {
    if (window.innerWidth <= 650) {
      this.directToAddTaskIfMobileView();
    } else {
      this.openDialogService.openDialogCreateTaskService(selectedTaskStatus);
    }
  }


  directToAddTaskIfMobileView() {
    this.router.navigateByUrl('/addTask');
  }


  dropTaskMiniView(event: CdkDragDrop<Task[]>, taskStatus: string) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const task = event.container.data[event.currentIndex];
      this.createTaskService.updateTaskStatusService(task, taskStatus);
    }
  }
}