import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class OpenDialogsService {
  dialogCreateNewContactIsOpen: boolean = false;
  overlayIsDisplayed: boolean = false;


  openDialogCreateNewContactService() {
    this.dialogCreateNewContactIsOpen = true;
    this.overlayIsDisplayed = true;
  }


  closeDialogCreateNewContactService() {
    this.dialogCreateNewContactIsOpen = false;
    setTimeout(() => {
      this.overlayIsDisplayed = false;
    }, 500);
  }
}
