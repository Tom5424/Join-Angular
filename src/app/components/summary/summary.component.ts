import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CreateTaskService } from 'src/app/services/create-task.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})


export class SummaryComponent {


  constructor(public authService: AuthService, public createTaskService: CreateTaskService, public route: Router) {

  }


  ngOnInit(): void {
    this.authService.loadDisplayedNameService();
    this.updateHTML();
  }


  updateHTML() {
    this.createTaskService.getNewTaskService('toDo');
    this.createTaskService.getNewTaskService('inProgress');
    this.createTaskService.getNewTaskService('awaitingFeedback');
    this.createTaskService.getNewTaskService('done');
  }


  directToTheBoard() {
    this.route.navigateByUrl('/board');
  }
}
