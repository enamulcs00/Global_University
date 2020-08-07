import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section11',
  templateUrl: './section11.component.html',
  styleUrls: ['./section11.component.css']
})
export class Section11Component implements OnInit {

  section11Form :FormGroup;
  workExperience:boolean = false
  submitted:boolean = false
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm() {
    this.section11Form = new FormGroup({
      "workExperience" : new FormControl(null,Validators.required),
      "totalExperience" : new FormControl(null),
      "employersName" : new FormControl(null,Validators.required),
      "employersBusiness" : new FormControl(null,Validators.required),
      "jobTitle" : new FormControl(null,Validators.required),
      "briefDuties" : new FormControl(null,Validators.required),
      "employedFrom" : new FormControl(null,Validators.required),
      "employedTo" : new FormControl(null),
      "annualSalary" : new FormControl(null,Validators.required),
      "employersAddress" : new FormControl(null,Validators.required),
      "email" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
      "achievements" : new FormControl(null,Validators.required),
    })
  }


  change(event){
    console.log("event->",event.target.value)
    if(event.target.value == "YES"){
      this.workExperience = true
    }else{
      this.workExperience = false
    }
  }

  saveAndQuit(){
    this.submitted = true
  }

}
