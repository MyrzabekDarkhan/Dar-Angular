import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Faculty } from "./faculties.types";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {FacultyRestService} from '../faculties/faculty-rest.service'

@Injectable()
export class FacultyResolver implements Resolve<Faculty>{
   
    constructor(private facultyRestService:FacultyRestService){}
    
    resolve(route:ActivatedRouteSnapshot):Observable<Faculty>{
        console.log(this.facultyRestService.getFaculty(route.paramMap.get('id')));
    return this.facultyRestService.getFaculty(route.paramMap.get('id'));
    }
}