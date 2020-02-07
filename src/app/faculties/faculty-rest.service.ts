import { Observable } from "rxjs"
import { Faculty } from "./faculties.types"
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacultyRestService {
  constructor(private http: HttpClient){

  }

  apiUrl = 'http://ca-api.witharts.kz';
  getFaculties(): Observable<Faculty[]>{
    
    return this.http.get<Faculty[]>(`${this.apiUrl}/faculties`);
  }

  createFaculty(faculty: Faculty): Observable<Faculty>{
    return this.http.post<Faculty>(`${this.apiUrl}/faculties`, faculty);
  }
  deleteFaculty(id: string): Observable<Faculty>{
    console.log(id);
    return this.http.delete<Faculty>(`${this.apiUrl}/faculties/${id}`);
    
  }

  getFaculty(id:string):Observable<Faculty>{
    return this.http.get<Faculty>(`${this.apiUrl}/faculties/${id}`);
  }

  updateFaculty(faculty:Faculty): Observable<Faculty>{
    return this.http.put<Faculty>(`${this.apiUrl}/faculties/${faculty.id}`, faculty);
  }
}
