import { Component, DoCheck } from '@angular/core';
import { CreateTaskService } from 'src/app/services/create-task.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-task-detail-view',
  templateUrl: './task-detail-view.component.html',
  styleUrls: ['./task-detail-view.component.scss']
})


export class TaskDetailViewComponent implements DoCheck {


  constructor(public createTaskService: CreateTaskService, public openDialogService: OpenDialogsService) {

  }


  ngDoCheck(): void {
    //  this.createTaskService.updateTaskDataService();
  }


  closeTaskDetailView() {
    this.openDialogService.closeDialogTaskDetailViewService();
  }


  closeDialogIfClickedOutside() {
    this.openDialogService.closeDialogEditTaskService();
    this.openDialogService.closeDialogTaskDetailViewService();
  }


  stopPropagation(event: Event) {
    event.stopPropagation();
  }


  deleteTask() {
    this.openDialogService.closeDialogTaskDetailViewService();
    this.createTaskService.deleteTaskService(this.openDialogService.docId);
  }


  editTask() {
    this.openDialogService.openDialogEditTaskService(this.openDialogService.task, this.openDialogService.docId);
  }
}
