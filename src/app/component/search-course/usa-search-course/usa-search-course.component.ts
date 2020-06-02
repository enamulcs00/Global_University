import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa-search-course',
  templateUrl: './usa-search-course.component.html',
  styleUrls: ['./usa-search-course.component.css']
})
export class UsaSearchCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
