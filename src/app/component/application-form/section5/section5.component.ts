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
  

  fillForm(){
    let formDetailsDto = {
      "aboutReference1": "string",
      "aboutReference2": "string",
      "academicQualificationFormDto": [
        {
          "academicQualifications": "string",
          "achieved": "string",
          "countryOfStudy": "string",
          "enddate": "2020-08-12T05:40:58.716Z",
          "highestAcademicQualification": "string",
          "instituteName": "string",
          "resultType": "string",
          "startDate": "2020-08-12T05:40:58.716Z",
          "subject1": "string",
          "subject1grade1": "string",
          "subject1grade2": "string",
          "subject2": "string",
          "value": 0
        }
      ],
      "address": "string",
      "addressForMba": "string",
      "applicationStatus": "CONDITIONAL_OFFER",
      "applyForExternalFunding": true,
      "applyForExternalFundingDescription": "string",
      "areResponsibleForWorkingWithBudgets": true,
      "arehavecreativetalent": true,
      "awardedDate": "2020-08-12T05:40:58.716Z",
      "briefDuties": "string",
      "coOrdinatingTeam": "string",
      "contactEmail": "string",
      "country": "string",
      "countryOfBirth": "string",
      "courseCountry": "string",
      "courseEnddate": "2020-08-12T05:40:58.716Z",
      "courseId": 0,
      "courseName": "string",
      "courseSttartDate": "2020-08-12T05:40:58.716Z",
      "currentEmployment": "string",
      "dateAppointed": "2020-08-12T05:40:58.716Z",
      "dates": "2020-08-12T05:40:58.716Z",
      "description": "string",
      "descriptionForMba": "string",
      "disability": true,
      "doUoyRequireVisatoStudtInTheUk": true,
      "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": true,
      "dob": "string",
      "email": "string",
      "emailForMba": "string",
      "employerName": "string",
      "employersName": "string",
      "formFillStatus": "INCOMPLETE",
      "forname": "string",
      "gender": "MALE",
      "graduateWorkExperience": 0,
      "grossAnnualSalary": 0,
      "homeAddress": "string",
      "homeEmail": "string",
      "homeTeliphoneNo": 0,
      "homeTeliphoneNo2": 0,
      "intakeNotApply": "2020-08-12T05:40:58.716Z",
      "isPersionalStatementFeel": true,
      "isresponsibility": true,
      "jobTitle": "string",
      "managementWorkExperience": 0,
      "matchingUniversityDto": [
        {
          "universityEmail": "string",
          "universityId": 0,
          "universityName": "string"
        }
      ],
      "meetingFinancial": "string",
      "multiCulturalAxposure": "string",
      "natureofEmployersBusiness": "string",
      "operationaActivities": "string",
      "pageFillNumber": "string",
      "passportNumber": "string",
      "permanentResidenceCountry": "string",
      "persionalDescription": "string",
      "pgtJobTitle": "string",
      "phoneNo": 0,
      "preferredName": "string",
      "primarilyAchieves": "string",
      "processesOrTechnology": "string",
      "professionalBodyMembership": "string",
      "professionalQualificationSubject": "string",
      "qualificationTitle": "string",
      "referee1Address": "string",
      "referee1Name": "string",
      "referee1TelephoneNumber": 0,
      "referee1Title": "string",
      "referee2Address": "string",
      "referee2Name": "string",
      "referee2TelephoneNumber": 0,
      "referee2Title": "string",
      "relevantCriminalConvictions": true,
      "representativeId": 0,
      "representativeName": "string",
      "requireSpecificTechnical": "string",
      "researchProposalForPGR": true,
      "researchProposalForPGRDescription": "string",
      "responsibleForManageProject": true,
      "responsibleFordeployCreativetalent": true,
      "sirName": "string",
      "solveProblemsAndDeliverResults": "string",
      "state": "string",
      "technicalResponsibility": true,
      "telephoneNo": 0,
      "telephoneNumber": 0,
      "title": "string",
      "totalWorkExperience": 0,
      "universityId": 0,
      "urlCv": "string",
      "urlDegree": "string",
      "urlDocuments": "string",
      "urlEnglishLanguageCertificate": "string",
      "urlResearchProposal": "string",
      "urlStatement": "string",
      "urlTranscript": "string",
      "urlpersonalStatement": "string",
      "wishtoApplyForUniversityFunding": true,
      "wishtoApplyForUniversityFundingDescription": "string",
      "wishtoApplyForUniversityscholarship": true,
      "wishtoApplyForUniversityscholarshipDescription": "string",
      "zipcode": 0
    }
    this.service.postApi(`course/form-fill-up-as-a-user`,formDetailsDto,1).subscribe((res:any) => {
      console.log("res-->",res)
    })
  }
}