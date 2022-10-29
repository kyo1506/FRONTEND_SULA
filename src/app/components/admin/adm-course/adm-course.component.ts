import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.controller.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-adm-course',
  templateUrl: './adm-course.component.html',
  styleUrls: ['../admin.component.scss']
})
export class AdmCourseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'isActive', 'createdOn', 'updatedOn'];
  dataSource: any;
  checkBoxArray = new Array();

  constructor(private course:CourseService) { }

  ngOnInit(): void {
    this.course.courseAll().subscribe((data)=>{
      this.dataSource = data;
    });
  }
  onCheckChange(value: string) {
    if (this.checkBoxArray.length === 0) {
      this.checkBoxArray.push(value);
    } else {
      let x = 0;
      let i = null;
      for (x = 0; x < this.checkBoxArray.length; x++) {
        if (this.checkBoxArray[x] === value) {
          i = x;
        }
      }
      if (i != null) {
        this.checkBoxArray.splice(i,1);
      } else {
        this.checkBoxArray.push(value);
      }
    }
  }
  createCourse(){ }
  updateCourse(){}
  deactivateCourse(){}
}
