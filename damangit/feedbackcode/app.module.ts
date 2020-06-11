import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { InterceptorService } from './service/interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdmindataService } from './service/admindata.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './service/user-service.service';
import { AdminService } from './service/adminservice.service';
import { UpdateService } from './service/updateservice.service';
import { LoginComponent } from './login/login.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultuserComponent } from './resultuser/resultuser.component';
import { AboutComponent } from './about/about.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UpdatefeedbackComponent } from './updatefeedback/updatefeedback.component';
import { AdminUpdateService } from './service/admin-update.service';
import { ResultService } from './service/result.service';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
@NgModule({
declarations: [
AppComponent,
HomeComponent,
UserListComponent,
UserFormComponent,
LoginComponent,
FeedbackformComponent,
FeedbackComponent,
WelcomeComponent,
ResultuserComponent,
AboutComponent,
UserupdateComponent,
UpdatefeedbackComponent,
RegisterstudentComponent
],
imports: [
BrowserModule,
RouterModule,
FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
MatToolbarModule,
MatIconModule,
MatButtonModule,
MatCardModule,
MatTableModule,
MatProgressSpinnerModule,
AppRoutingModule,
HttpClientModule
],
  providers: [UserService,AdminService,UpdateService, AdmindataService,AdminUpdateService,ResultService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
