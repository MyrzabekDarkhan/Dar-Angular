import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';

import{Route,RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { StudentRestService } from './student-rest.service';
import { StudentResolver } from './student.resolver';


const routes: Route [] = [
{path:'',component:StudentListComponent},
{path:'student/:id',component:StudentComponent,
resolve: {
  student:StudentResolver
}},
{path:'student',component:StudentComponent},
]


@NgModule({
  declarations: [
        StudentListComponent,
     StudentListItemComponent,
     StudentComponent,
     
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers:[
    StudentResolver,
  ]
})
export class StudentsModule { 


  
 
}

