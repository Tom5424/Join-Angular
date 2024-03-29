import { Component } from '@angular/core';
import { CreateTaskService } from 'src/app/services/create-task.service';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-task-detail-view',
  templateUrl: './task-detail-view.component.html',
  styleUrls: ['./task-detail-view.component.scss', './task-detail-view.component.media.scss']
})


export class TaskDetailViewComponent {


  constructor(public createTaskService: CreateTaskService, public openDialogService: OpenDialogsService) {

  }


  closeTaskDetailView() {
    this.openDialogService.closeDialogTaskDetailViewService();
  }


  closeDialogIfClickedOutside() {
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
    this.openDialogService.openDialogEditTaskService(this.createTaskService.task, this.openDialogService.docId);
  }
}
