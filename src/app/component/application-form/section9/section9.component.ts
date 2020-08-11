import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section9',
  templateUrl: './section9.component.html',
  styleUrls: ['./section9.component.css']
})
export class Section9Component implements OnInit {

  section9Form : FormGroup;
  submitted:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
    this.section9Form = new FormGroup({
      "currentlyFundingForStudy" : new FormControl(null,Validators.required),
      "applyForExternalFunding" : new FormControl(null,Validators.required),
      "externalFundingDescription" : new FormControl(''),
      "applyForUniversityFunding" : new FormControl(null,Validators.required),
      "universityFundingDescription" : new FormControl(''),
      "wishForUniversityScholarship" : new FormControl(null,Validators.required),
      "wishForUniversityScholarshipDescription" : new FormControl('')
    })
    if(localStorage.getItem('section9')){
      let section9Data = JSON.parse(localStorage.getItem('section9'));
      this.section9Form.patchValue({
        "currentlyFundingForStudy" : section9Data.currentlyFundingForStudy,
        "applyForExternalFunding" : section9Data.applyForExternalFunding,
        "externalFundingDescription" : section9Data.externalFundingDescription,
        "applyForUniversityFunding" : section9Data.applyForUniversityFunding,
        "universityFundingDescription" : section9Data.universityFundingDescription,
        "wishForUniversityScholarship" : section9Data.wishForUniversityScholarship,
        "wishForUniversityScholarshipDescription" : section9Data.wishForUniversityScholarshipDescription,
      })
    }
  }

  saveAndQuit(){
    this.submitted = true
    console.log('--->>>',this.section9Form.controls['externalFundingDescription'])
    if(this.section9Form.invalid){
      return false;
    }
  }

  continue(){
    this.submitted = true
    if(this.section9Form.invalid){
      return false;
    }
    console.log('--->>>',this.section9Form.value)
    localStorage.setItem('section9',JSON.stringify(this.section9Form.value))
    this.router.navigateByUrl('section10');
  }

  change(event){
    // if(event.target.value == 'YES'){
    //   this.section9Form.controls["externalFundingDescription"].setValidators(Validators.required);
    // }
  }
  
}
