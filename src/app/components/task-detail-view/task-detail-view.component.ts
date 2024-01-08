import { Component } from '@angular/core';
import { OpenDialogsService } from 'src/app/services/open-dialogs.service';


@Component({
  selector: 'app-task-detail-view',
  templateUrl: './task-detail-view.component.html',
  styleUrls: ['./task-detail-view.component.scss']
})


export class TaskDetailViewComponent {


  constructor(public openDialogService: OpenDialogsService) {

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
}
