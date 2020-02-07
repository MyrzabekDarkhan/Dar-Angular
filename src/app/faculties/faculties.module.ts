import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyListItemComponent } from './faculty-list-item/faculty-list-item.component';

import{Route,RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultyComponent } from './faculty/faculty.component';
 import { FacultyRestService } from './faculty-rest.service';
import { resolve } from 'url';
import { FacultyResolver } from './faculty.resolver';


const routes: Route [] = [
{path:'',component:FacultyListComponent},
{path:'faculty/:id',component:FacultyComponent,
resolve: {
  faculty:FacultyResolver
}},
{path:'faculty',component:FacultyComponent,

}
]


@NgModule({
  declarations: [
    FacultyComponent,
    FacultyListComponent,
    FacultyListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers:[
    FacultyResolver
  ]
})
export class FacultyModule { 


  
 
}
