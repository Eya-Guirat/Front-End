import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './working hours/project/index/index.component';
import { CreateComponent } from './working hours/project/create/create.component';
import { EditComponent } from './working hours/project/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { CreateProjectComponent } from './working_hours/projects/create-project/create-project.component';
import { EditProjectComponent } from './working_hours/projects/edit-project/edit-project.component';
import { IndexProjectComponent } from './working_hours/projects/index-project/index-project.component';
import { LoginComponent } from './auth/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { CreateTicketComponent } from './working_hours/tickets/create-ticket/create-ticket.component';
import { EditTicketComponent } from './working_hours/tickets/edit-ticket/edit-ticket.component';
import { IndexTicketComponent } from './working_hours/tickets/index-ticket/index-ticket.component';
import { CreateBoardComponent } from './working_hours/board/create-board/create-board.component';
import { EditBoardComponent } from './working_hours/board/edit-board/edit-board.component';
import { IndexBoardComponent } from './working_hours/board/index-board/index-board.component';
import { CreateVacationComponent } from './vacation/create-vacation/create-vacation.component';
import { EditVacationComponent } from './vacation/edit-vacation/edit-vacation.component';
import { IndexVacationComponent } from './vacation/index-vacation/index-vacation.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';






@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    CreateProjectComponent,
    EditProjectComponent,
    IndexProjectComponent,
    LoginComponent,
    CreateTicketComponent,
    EditTicketComponent,
    IndexTicketComponent,
    CreateBoardComponent,
    EditBoardComponent,
    IndexBoardComponent,
    CreateVacationComponent,
    EditVacationComponent,
    IndexVacationComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,

    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
