import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FacultyRestService } from '../faculty-rest.service';
import { Faculty } from '../faculties.types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {


  public submitted = false;
  form: FormGroup;
  public facultyToCreate: Faculty = <Faculty>{};
  public facultiesToShow: Faculty[] = [];
  public faculties: Faculty[] = [];
  constructor(private facultyRestService:FacultyRestService,
    private router:Router, 
    private route:ActivatedRoute) {}
 
   faculty:Faculty;

  ngOnInit() {
    
    this.form = new FormGroup({
      
      name: new FormControl('', Validators.required),
     // 'specialities': new FormArray([]),
    //  id: new FormControl(0,Validators.required),
      
    });
  
    this.route.data    
    .subscribe(data =>{
      if(data.faculty){
          this.faculty = data.faculty;
          this.form.patchValue(data.faculty);
         }
      });
     };
 

  createFaculty(){
    this.submitted = true;
    if(!this.form.valid)
      return;

    let name = this.form.get('name').value;
  
    //let specialities = this.form.get('specialities').value;
    let id = this.form.get('id').value;
    const newFaculty = {name, id};
  
    this.submitted = false;

    if(this.faculty){
      this.faculty = {...this.faculty,...newFaculty};
      this.facultyRestService.updateFaculty(this.faculty)
      .subscribe(faculty=>{
        if(faculty){
          this.router.navigate(['faculties'])
        }
      });
      return;
    }
    this.facultyRestService.createFaculty(newFaculty).subscribe( res => {
      // this.students = [...this.students, student];
      // this.form.reset();
     // this.refreshStudentsToShow();
     
     if(res){
      this.router.navigate(['faculties']);
     }
    })
  }
  




}

