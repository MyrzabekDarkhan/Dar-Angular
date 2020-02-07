import { Component, OnInit } from "@angular/core";
import { Student }  from "../student.types";
import { StudentRestService }  from "../student-rest.service";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  public searchQuery = "";
 
  public studentToCreate: Student = <Student>{};
  public studentsToShow: Student[] = [];
  public students: Student[] = [];
  constructor(private studentRestService: StudentRestService,private router:Router,) { }

  ngOnInit() {
    this.studentRestService.getStudents()
    .subscribe(students => {
       this.students = students;
       this.studentsToShow = [...students];
    }
    );
  }


  search(){
    this.studentsToShow = this.students.filter(
      student => student.firstName.includes(this.searchQuery)
    )
  }
  deleteStudent(id:string){
    //console.log("deleting "+ id);
    this.studentRestService.deleteStudent(id).subscribe(
      ()=>{
        //console.log("student deleted")
        for (let index = 0; index < this.studentsToShow.length; index++) {
          if(this.studentsToShow[index].id == id ){
          this.studentsToShow.splice(index);
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
  editStudent(student:Student){
    this.router.navigate(['students','student',student.id])
  }

}

  