import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

  section5Form :FormGroup;
  submitted:boolean = false
  countryList:any = []

  constructor(private router:Router,private service:ServicesService) { }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
      this.section5Form = new FormGroup({
          "nativeOfEnglishSpeakingCountry" : new FormControl(null,Validators.required),
          "nativeEnglishSpeakingCountryName" : new FormControl(""),
          "englishLanguageTestDetails" : new FormControl(""),
          "professionalQualification" : new FormControl(null,Validators.required),
          "englishQualificationName" : new FormControl(""),
          "englishQualificationDate" : new FormControl(''),
          "englishQualificationScore1" : new FormControl(''),
          "englishQualificationScore2" : new FormControl(''),
          "englishQualificationScore3" : new FormControl(''),
          "englishQualificationScore4" : new FormControl(''),
          "highestAcedemicQualification" : new FormControl(''),
          "typeOfEnglishQualification" : new FormControl(''),
          "resultType" : new FormControl(null,Validators.required),
          "overallResult" : new FormControl(null,Validators.required),
      })
      if(localStorage.getItem('section5')){
        console.log("-->",localStorage.getItem('section5'))
        let section5Data = JSON.parse(localStorage.getItem('section5'));
        this.section5Form.setValue({
          "nativeOfEnglishSpeakingCountry" :  section5Data.nativeOfEnglishSpeakingCountry,
          "nativeEnglishSpeakingCountryName" :  section5Data.nativeEnglishSpeakingCountryName,
          "englishLanguageTestDetails" :  section5Data.englishLanguageTestDetails,
          "professionalQualification" :  section5Data.professionalQualification,
          "englishQualificationName" :  section5Data.englishQualificationName,
          "englishQualificationDate" :  section5Data.englishQualificationDate,
          "englishQualificationScore1" :  section5Data.englishQualificationScore1,
          "englishQualificationScore2" :  section5Data.englishQualificationScore2,
          "englishQualificationScore3" :  section5Data.englishQualificationScore3,
          "englishQualificationScore4" :  section5Data.englishQualificationScore4,
          "highestAcedemicQualification" :  section5Data.highestAcedemicQualification,
          "typeOfEnglishQualification" :  section5Data.typeOfEnglishQualification,
          "resultType" :  section5Data.resultType,
          "overallResult" :  section5Data.overallResult,
        })
      }
  }

  saveAndQuit(){
    this.submitted = true
    console.log("save---->>",this.section5Form)
  }

  selectNativeOfEnglishSpeakingCountry(event){
    console.log('vj--->',event.target.value)  
  }

  continue() {
    this.submitted = true;
    if (this.section5Form.invalid) {
      return false
    }
    localStorage.setItem('section5', JSON.stringify(this.section5Form.value))
    this.router.navigateByUrl('section6');
  }
}
