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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgotMyPasswordComponent } from './components/forgot-my-password/forgot-my-password.component';
import { isLoggedIn } from './auth.guard';


const routes: Routes = [
  { path: 'login', title: 'Join - Login', component: LoginComponent },
  { path: 'signup', title: 'Join - Signup', component: SignupComponent },

  { path: 'privacy-policy', title: 'Join - Privacy Policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', title: 'Join - Legal Notice', component: LegalNoticeComponent },
  { path: 'description', title: 'Join - Description', component: DescriptionComponent, canActivate: [isLoggedIn] },

  { path: 'summary/privacy-policy', title: 'Join - Privacy Policy', component: PrivacyPolicyComponent, canActivate: [isLoggedIn] },
  { path: 'summary/legal-notice', title: 'Join - Legal Notice', component: LegalNoticeComponent, canActivate: [isLoggedIn] },

  { path: 'summary', title: 'Join - Summary', component: SummaryComponent, canActivate: [isLoggedIn] },
  { path: 'addTask', title: 'Join - Add Task', component: AddTaskComponent, canActivate: [isLoggedIn] },
  { path: 'board', title: 'Join - Board', component: BoardComponent, canActivate: [isLoggedIn] },
  { path: 'contacts', title: 'Join - Contacts', component: ContactsComponent, canActivate: [isLoggedIn] },
  { path: 'forgotMyPassword', title: 'Join - Forgot my Password', component: ForgotMyPasswordComponent },

  { path: '**', title: 'Join - Page not found', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
