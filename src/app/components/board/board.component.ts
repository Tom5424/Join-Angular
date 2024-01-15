import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Task } from 'src/app/models/task';
import { CreateTaskService } from 'src/app/services/create-task.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})


export class BoardComponent implements OnInit {
  @ViewChild('inputFindTask') inputFindTask!: ElementRef;
  inputValue: string = '';


  constructor(public renderer: Renderer2, public createTaskService: CreateTaskService, public openDialogService: OpenDialogsService) {

  }


  ngOnInit(): void {
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
    const filteredTasks = this.filterTasksByCategory(this.createTaskService.allTasks, this.inputValue);
    this.getSearchResult(filteredTasks);
  }


  filterTasksByCategory(tasks: Task[], inputValue: string) {
    return tasks.filter((task) => task.categoryName.toLowerCase().startsWith(inputValue));
  }


  getSearchResult(filteredTasks: Task[]) {
    if (this.inputValue.length == 0) {
      this.updateHTML();
    } else {
      this.updateTaskArrays(filteredTasks);
    }
  }


  updateTaskArrays(filteredTasks: Task[]) {
    this.createTaskService.toDoTaskArray = filteredTasks.filter((task) => task.status == 'toDo');
    this.createTaskService.inProgressTaskArray = filteredTasks.filter((task) => task.status == 'inProgress');
    this.createTaskService.awaitingFeebackTaskArray = filteredTasks.filter((task) => task.status == 'awaitingFeedback');
    this.createTaskService.doneTaskArray = filteredTasks.filter((task) => task.status == 'done');
  }


  focusInput() {
    this.renderer.selectRootElement(this.inputFindTask.nativeElement).focus();
  }


  openDialogAddTask(selectedTaskStatus: string) {
    this.openDialogService.openDialogCreateTaskService(selectedTaskStatus);
  }


  dropTaskMiniView(event: CdkDragDrop<Task[]>, taskStatus: string) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // const task = event.container.data[event.currentIndex];
      // this.createTaskService.updateTaskStatusService(task, taskStatus);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const task = event.container.data[event.currentIndex];
      this.createTaskService.updateTaskStatusService(task, taskStatus);
    }
  }
}