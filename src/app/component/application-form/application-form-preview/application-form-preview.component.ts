import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form-preview',
  templateUrl: './application-form-preview.component.html',
  styleUrls: ['./application-form-preview.component.css']
})
export class ApplicationFormPreviewComponent implements OnInit {
  mbaExist: boolean = false;
  executiveMbaExist: boolean = false;
  section1 :any
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.section1 = JSON.parse(localStorage.getItem('section1'))
    if(JSON.parse(localStorage.getItem('section1')).searchCourse.toLowerCase().includes('mba')){
      this.mbaExist = true;
      if(JSON.parse(localStorage.getItem('section1')).searchCourse.toLowerCase().includes('executive')){
          this.executiveMbaExist = true;
      }
  }
  }

}
