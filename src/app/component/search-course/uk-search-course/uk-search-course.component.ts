import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uk-search-course',
  templateUrl: './uk-search-course.component.html',
  styleUrls: ['./uk-search-course.component.css']
})
export class UkSearchCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
