import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DescriptionComponent } from './components/description/description.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { BoardComponent } from './components/board/board.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailViewComponent } from './components/contact-detail-view/contact-detail-view.component';


const routes: Routes = [
  { path: 'login', title: 'Join - Login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', title: 'Join - Signup', component: SignupComponent },

  { path: 'privacy-policy', title: 'Join - Privacy Policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', title: 'Join - Legal Notice', component: LegalNoticeComponent },
  { path: 'description', title: 'Join - Description', component: DescriptionComponent },

  { path: 'summary/privacy-policy', title: 'Join - Privacy Policy', component: PrivacyPolicyComponent },
  { path: 'summary/legal-notice', title: 'Join - Legal Notice', component: LegalNoticeComponent },

  { path: 'summary', title: 'Join - Summary', component: SummaryComponent },
  { path: 'addTask', title: 'Join - Add Task', component: AddTaskComponent },
  { path: 'board', title: 'Join - Board', component: BoardComponent },
  // { path: 'contacts', title: 'Join - Contacts', component: ContactsComponent },

  {
    path: 'contacts', title: 'Join - Contacts', component: ContactsComponent, children: [
      { path: 'contact/:id', component: ContactDetailViewComponent }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
