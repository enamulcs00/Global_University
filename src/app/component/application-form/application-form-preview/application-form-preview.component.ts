import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form-preview',
  templateUrl: './application-form-preview.component.html',
  styleUrls: ['./application-form-preview.component.css']
})
export class ApplicationFormPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
