import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { StudentRestService } from '../student-rest.service';
import { Student } from '../student.types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public submitted = false;
  form: FormGroup;
  public studentToCreate: Student = <Student>{};
  public studentsToShow: Student[] = [];
  public students: Student[] = [];
  constructor(private studentRestService:StudentRestService,
    private router:Router, 
    private route:ActivatedRoute) {}
 
student:Student;
  

  ngOnInit() {
    this.form = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'score': new FormControl(0, Validators.required),
      'courses': new FormArray([]),
      'id': new FormControl(0,Validators.required),
    });

    this.route.data    
    .subscribe(data=>{
      if(data.student){
      //  this.studentRestService.getStudent(data.student)
        //.subscribe(student =>{
          this.student = data.student;
          this.form.patchValue(data.student);
          if(this.student.courses){
            this.student.courses.forEach(course =>{
              const arrayControl = this.form.get('courses') as FormArray;
    arrayControl.push(new FormGroup({
        name: new FormControl(course.name, Validators.required),
      }))
  
            });
          }
      
      }
    });
  }


  addCourse(){
    console.log(this.submitted);
    const arrayControl = this.form.get('courses') as FormArray;
    arrayControl.push(new FormGroup(
      {
        name: new FormControl('', Validators.required),
      }
    ));
  }

  // refreshStudentsToShow(){
  //   this.search();
  // }

  createStudent(){
    this.submitted = true;
    if(!this.form.valid)
      return;

    let firstName = this.form.get('firstName').value;
    let lastName = this.form.get('lastName').value;
    let score = this.form.get('score').value;
    let courses = this.form.get('courses').value;
    let id = this.form.get('id').value;
    const newStudent = {firstName, lastName, score, courses,id};
  
    this.submitted = false;

    if(this.student){
      this.student = {...this.student,...newStudent};
      this.studentRestService.updateStudent(this.student)
      .subscribe(student=>{
        if(student){
          this.router.navigate(['students'])
        }
      });
      return;
    }
    this.studentRestService.createStudent(newStudent).subscribe( res => {
      // this.students = [...this.students, student];
      // this.form.reset();
     // this.refreshStudentsToShow();
     if(res){
      this.router.navigate(['students']);
     }
    })
  }
  




}
