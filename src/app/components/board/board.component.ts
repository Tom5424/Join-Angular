import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
    this.createTaskService.getNewTaskService();
  }


  focusInput() {
    this.renderer.selectRootElement(this.inputFindTask.nativeElement).focus();
  }


  openDialogAddTask() {
    this.openDialogService.openDialogCreateTaskService();
  }
}