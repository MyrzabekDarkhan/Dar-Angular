import { Observable } from "rxjs"
import { Student } from "./student.types"
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentRestService {
  constructor(private http: HttpClient){

  }

  apiUrl = 'http://ca-api.witharts.kz';
  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiUrl}/students`);
  }

  createStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this.apiUrl}/students`, student);
  }
  deleteStudent(id: string): Observable<Student>{
    console.log(id);
    return this.http.delete<Student>(`${this.apiUrl}/students/${id}`);
    
  }

  getStudent(id:string):Observable<Student>{
    return this.http.get<Student>(`${this.apiUrl}/students/${id}`);
  }

  updateStudent(student:Student): Observable<Student>{
    return this.http.put<Student>(`${this.apiUrl}/students/${student.id}`, student);
  }
}
