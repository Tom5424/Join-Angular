import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlankSidebarComponent } from './components/blank-sidebar/blank-sidebar.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { HeaderComponent } from './components/header/header.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from 'src/firebase.config';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DescriptionComponent } from './components/description/description.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { BoardComponent } from './components/board/board.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DialogCreateNewContactComponent } from './components/dialog-create-new-contact/dialog-create-new-contact.component';
import { DialogEditContactComponent } from './components/dialog-edit-contact/dialog-edit-contact.component';
import { ContactDetailViewComponent } from './components/contact-detail-view/contact-detail-view.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddTaskComponent } from './components/dialog-add-task/dialog-add-task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskMiniViewComponent } from './components/task-mini-view/task-mini-view.component';
import { TaskDetailViewComponent } from './components/task-detail-view/task-detail-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    BlankSidebarComponent,
    PrivacyPolicyComponent,
    HeaderComponent,
    LegalNoticeComponent,
    OverlayComponent,
    SummaryComponent,
    SidebarComponent,
    DescriptionComponent,
    AddTaskComponent,
    BoardComponent,
    ContactsComponent,
    DialogCreateNewContactComponent,
    DialogEditContactComponent,
    ContactDetailViewComponent,
    DialogAddTaskComponent,
    TaskMiniViewComponent,
    TaskDetailViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NoopAnimationsModule,
    MatMenuModule,
    MatTooltipModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
