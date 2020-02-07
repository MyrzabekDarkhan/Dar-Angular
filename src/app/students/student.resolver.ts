import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Student } from "./student.types";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StudentRestService } from '../students/student-rest.service';

@Injectable()
export class StudentResolver implements Resolve<Student>{
   
    constructor(private studentRestService:StudentRestService){}
    
    resolve(route:ActivatedRouteSnapshot):Observable<Student>{
        
    return this.studentRestService.getStudent(route.paramMap.get('id'));
    }
}