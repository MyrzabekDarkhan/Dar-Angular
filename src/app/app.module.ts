import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentListItemComponent } from './students/student-list-item/student-list-item.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule,Route} from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
// import { StudentsModule } from './students/students.module';

// import { FacultyComponent } from './faculties/faculty/faculty.component';
// import { FacultyListComponent } from './faculties/faculty-list/faculty-list.component';
// import { FacultyListItemComponent } from './faculties/faculty-list-item/faculty-list-item.component';
const routes: Route[] = [
  { path: '', 
    component: DashboardComponent,
    canActivate: [AuthGuard], 
    children: [
      { path:'', component:  HomeComponent },
      { path:'faculties',
  //canActivate: [AuthGuard], 
        loadChildren : () => import('./faculties/faculties.module').then(m => m.FacultyModule)
      },
      {
        path: 'students',
        loadChildren : () => import('./students/students.module').then(m => m.StudentsModule)
      },  
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'**', component:  PageNotFoundComponent },
];

@NgModule({
  declarations: [
     AppComponent,
    
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
