import { Component, OnInit } from '@angular/core';

import { Faculty }  from "../faculties.types";
import { FacultyRestService }  from "../faculty-rest.service";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
 
export class FacultyListComponent implements OnInit {
  public searchQuery = "";
 
  public facultyToCreate: Faculty = <Faculty>{};
  public facultiesToShow: Faculty[] = [];
  
  public faculties: Faculty[] = [];
  
  constructor(private facultyRestService: FacultyRestService,private router:Router,) { }
  
  ngOnInit() {
    this.facultyRestService.getFaculties()
    .subscribe(faculties => {
       this.faculties = faculties;
       this.facultiesToShow = [...faculties];
    }
    );
  }
  


  search(){
    this.facultiesToShow = this.faculties.filter(
      faculty => faculty.name.includes(this.searchQuery)
    )
  }
  deleteFaculty(id:string){
    
    //console.log("deleting "+ id);
    this.facultyRestService.deleteFaculty(id).subscribe(
      ()=>{
        //console.log("student deleted")
        for (let index = 0; index < this.facultiesToShow.length; index++) {
          if(this.facultiesToShow[index].id == id ){
          this.facultiesToShow.splice(index);
           //console.log(this.studentsToShow[index].id)
           break;
          }
          //console.log(this.studentsToShow[index].id,id);
        }
      
     }
    );
   // console.log(this.students[1]);
    //this.studentRestService.deleteStudent(this.students.).subscribe()
  }
  editFaculty(faculty:Faculty){
    this.router.navigate(['faculties','faculty',faculty.id])
  }

}

  
