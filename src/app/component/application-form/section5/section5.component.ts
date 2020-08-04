import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

  section5Form :FormGroup;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
      this.section5Form = new FormGroup({
          "nativeOfEnglishSpeakingCountry" : new FormControl(),
          "nativeEnglishSpeakingCountryName" : new FormControl(),
          "englishLanguageTestDetails" : new FormControl(),
          "professionalQualification" : new FormControl(),
          "englishQualificationName" : new FormControl(),
          "englishQualificationDate" : new FormControl(),
          "englishQualificationScore1" : new FormControl(),
          "englishQualificationScore2" : new FormControl(),
          "englishQualificationScore3" : new FormControl(),
          "englishQualificationScore4" : new FormControl(),
          "highestAcedemicQualification" : new FormControl(),
          "typeOfEnglishQualification" : new FormControl(),
          "resultType" : new FormControl(),
          "overallResult" : new FormControl(),
      })
  }

  saveAndQuit(){
    console.log("save---->>",this.section5Form.value)
  }

  selectNativeOfEnglishSpeakingCountry(event){
    console.log('vj--->',event)
  }


}
