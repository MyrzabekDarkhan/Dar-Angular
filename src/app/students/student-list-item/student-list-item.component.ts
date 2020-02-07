import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/students/student.types'

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
