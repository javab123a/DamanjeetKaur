import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/authgaurd';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultuserComponent } from './resultuser/resultuser.component';
import { AboutComponent } from './about/about.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UpdatefeedbackComponent } from './updatefeedback/updatefeedback.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'login', component: LoginComponent },
{ path: 'feedbackform', component: FeedbackformComponent},
{ path: 'feedback', component: FeedbackComponent },
{ path: 'user-list', component: UserListComponent },
{ path: 'user-form', component: UserFormComponent },
{ path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
{ path: 'resultuser', component: ResultuserComponent },
{ path: 'about', component: AboutComponent },
{ path: 'userupdate', component: UserupdateComponent },
{ path: 'updatefeedback', component: UpdatefeedbackComponent },
{ path: 'registerstudent', component: RegisterstudentComponent }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
