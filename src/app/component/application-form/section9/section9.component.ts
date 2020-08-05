import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section9',
  templateUrl: './section9.component.html',
  styleUrls: ['./section9.component.css']
})
export class Section9Component implements OnInit {

  section9Form : FormGroup;
  submitted:boolean = false;
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
    this.section9Form = new FormGroup({
      "currentlyFundingForStudy" : new FormControl(null,Validators.required),
      "applyForExternalFunding" : new FormControl(null,Validators.required),
      "externalFundingDescription" : new FormControl(""),
      "applyForUniversityFunding" : new FormControl(null,Validators.required),
      "universityFundingDescription" : new FormControl(null,),
      "wishForUniversityScholarship" : new FormControl(null,Validators.required),
      "wishForUniversityScholarshipDescription" : new FormControl(null)
    })
  }

  saveAndQuit(){
    this.submitted = true
    console.log('--->>>',this.section9Form.controls['externalFundingDescription'])
  }

  change(event){
    console.log("ecebt-->",event.target.value)
    if(event.target.value == 'YES'){
      this.section9Form.controls["externalFundingDescription"].setValidators(Validators.required);
    }

  }
  
}
