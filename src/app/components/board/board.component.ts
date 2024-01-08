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


  constructor(public renderer: Renderer2, public createTaskService: CreateTaskService, public openDialogService: OpenDialogsService) {

  }


  ngOnInit(): void {
    this.createTaskService.getNewTaskService('toDo');
    // this.createTaskService.getNewTaskService('inProgress');
  }


  focusInput() {
    this.renderer.selectRootElement(this.inputFindTask.nativeElement).focus();
  }


  openDialogAddTask() {
    this.openDialogService.openDialogCreateTaskService();
  }


  dropTaskMiniView(event: CdkDragDrop<Task[]>, taskStatus: string) {
    if (event.previousContainer.data == event.container.data) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // const task = event.container.data[event.currentIndex];
      // this.createTaskService.updateTaskStatus(task, taskStatus);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      // const task = event.container.data[event.currentIndex];
      // this.createTaskService.updateTaskStatus(task, taskStatus);
    }
  }


  // getTaskArrayByStatus(status: string) {
  //   switch (status) {
  //     case 'toDo':
  //       return this.createTaskService.toDoTaskArray;
  //     case 'inProgress':
  //       return this.createTaskService.inProgressTaskArray;
  //     case 'awaitingFeedback':
  //       return this.createTaskService.awaitingFeebackTaskArray;
  //     case 'done':
  //       return this.createTaskService.doneTaskArray;
  //     default:
  //       return [];
  //   }
  // }
}