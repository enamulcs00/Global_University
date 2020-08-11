import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section11',
  templateUrl: './section11.component.html',
  styleUrls: ['./section11.component.css']
})
export class Section11Component implements OnInit {

  section11Form :FormGroup;
  workExperience:boolean = false
  submitted:boolean = false

  constructor(private router:Router) { }

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

    if(localStorage.getItem('section11')){
      let section11Data = JSON.parse(localStorage.getItem('section11'))
      this.section11Form.setValue({
        "workExperience" : section11Data.workExperience,
        "totalExperience" : section11Data.totalExperience,
        "employersName" : section11Data.employersName,
        "employersBusiness" : section11Data.employersBusiness,
        "jobTitle" : section11Data.jobTitle,
        "briefDuties" : section11Data.briefDuties,
        "employedFrom" : section11Data.employedFrom,
        "employedTo" : section11Data.employedTo,
        "annualSalary" : section11Data.annualSalary,
        "employersAddress" : section11Data.employersAddress,
        "email" : section11Data.email,
        "achievements" : section11Data.achievements,
      })
    }
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
    if(this.section11Form.invalid){
      return false
    }
  }
  
  continue(){
    this.submitted = true
    if(this.section11Form.invalid){
      return false
    }
    localStorage.setItem('section11',JSON.stringify(this.section11Form.value))
    this.router.navigateByUrl('section12')
  }

}
