import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  section2Form:FormGroup;
  submitted:boolean = false;
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm() {
    this.section2Form = new FormGroup({
      "searchCourse" : new FormControl('',[Validators.required]),
      "countryName" : new FormControl('',[Validators.required]),
      "startYear" : new FormControl('',[Validators.required]),
      "startMonth" : new FormControl('',[Validators.required]),
      "yearIntake" : new FormControl('',[Validators.required]),
    })
  }

  saveAndQuit(){
    this.submitted = true;
    if(this.section2Form.invalid){
      return false
    }
    console.log("submit -->>",this.section2Form.value)
  }

}
