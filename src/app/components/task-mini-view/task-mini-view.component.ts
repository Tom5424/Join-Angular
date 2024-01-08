import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task';


@Component({
  selector: 'app-task-mini-view',
  templateUrl: './task-mini-view.component.html',
  styleUrls: ['./task-mini-view.component.scss']
})


export class TaskMiniViewComponent {
  @Input() task!: Task;


  constructor() {

  }
}