import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

  section5Form :FormGroup;
  submitted:boolean = false

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
      this.section5Form = new FormGroup({
          "nativeOfEnglishSpeakingCountry" : new FormControl(null,Validators.required),
          "nativeEnglishSpeakingCountryName" : new FormControl(null,Validators.required),
          "englishLanguageTestDetails" : new FormControl(null,Validators.required),
          "professionalQualification" : new FormControl(null,Validators.required),
          "englishQualificationName" : new FormControl(null,Validators.required),
          "englishQualificationDate" : new FormControl(null,Validators.required),
          "englishQualificationScore1" : new FormControl(null,Validators.required),
          "englishQualificationScore2" : new FormControl(null,Validators.required),
          "englishQualificationScore3" : new FormControl(null,Validators.required),
          "englishQualificationScore4" : new FormControl(null,Validators.required),
          "highestAcedemicQualification" : new FormControl(null,Validators.required),
          "typeOfEnglishQualification" : new FormControl(null,Validators.required),
          "resultType" : new FormControl(null,Validators.required),
          "overallResult" : new FormControl(null,Validators.required),
      })
  }

  saveAndQuit(){
    this.submitted = true
    console.log("save---->>",this.section5Form.value)
  }

  selectNativeOfEnglishSpeakingCountry(event){
    console.log('vj--->',event.target.value)
  }


}
