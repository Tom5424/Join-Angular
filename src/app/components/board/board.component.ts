import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})


export class BoardComponent {
  @ViewChild('inputFindTask') inputFindTask!: ElementRef;


  constructor(public renderer: Renderer2) {

  }


  focusInput() {
    this.renderer.selectRootElement(this.inputFindTask.nativeElement).focus();
  }
}