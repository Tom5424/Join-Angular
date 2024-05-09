import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CreateTaskService } from 'src/app/services/create-task.service';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss', './summary.component.media.scss']
})


export class SummaryComponent {
  displayLoggedUserMobibleView: boolean = false;


  constructor(public authService: AuthService, public createTaskService: CreateTaskService, public routingService: RoutingService, public router: Router) {

  }


  ngOnInit(): void {
    this.routingService.savePreviousUrl(this.router.url);
    this.authService.loadDisplayedNameService();
    this.updateHTML();
    this.displayLoggedUserInMobileView();
  }


  updateHTML() {
    this.createTaskService.getNewTaskService('toDo');
    this.createTaskService.getNewTaskService('inProgress');
    this.createTaskService.getNewTaskService('awaitingFeedback');
    this.createTaskService.getNewTaskService('done');
  }


  directToTheBoard() {
    this.router.navigateByUrl('/board');
  }


  displayLoggedUserInMobileView() {
    if (window.innerWidth <= 1090) {
      this.displayLoggedUserMobibleView = true;
    }
    setTimeout(() => {
      this.displayLoggedUserMobibleView = false;
    }, 1000);
  }
}
