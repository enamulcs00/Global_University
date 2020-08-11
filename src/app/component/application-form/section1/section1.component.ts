import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  section1Form:FormGroup;
  submitted:boolean = false;
  countryList:any = [];

  constructor(private service:ServicesService,private router:Router) { }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    this.initializeForm()
    window.scrollTo(0, 0);
  }

  initializeForm(){
      this.section1Form = new FormGroup({
        "title" : new FormControl('',[Validators.required]),
        "surName" : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
        "foreName" : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
        "prefferedName" : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
        "gender" : new FormControl('',[Validators.required]),
        "email" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
        "confirmEmail" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
        "permanentResidenceCountry" : new FormControl('',[Validators.required]),
        "dateOfBirth" : new FormControl('',[Validators.required]),
        "CountryOfBirth" : new FormControl('',[Validators.required]),
        "passportNumber" : new FormControl('',[Validators.required]),
        "requireVisaForUK" : new FormControl('',[Validators.required]),
        "ethnicity" : new FormControl('',[Validators.required]),
        "disability" : new FormControl('',[Validators.required]),
        "descriptionForDisablity" : new FormControl('',),
        "criminalConviction" : new FormControl('',[Validators.required]),
        "descriptionForCriminalConviction" : new FormControl('',),
      })
      if(localStorage.getItem('section2')){
        let section2Data = JSON.parse(localStorage.getItem('section2'))
        this.section1Form.setValue({
          "title" : section2Data.title,
          "surName" : section2Data.surName,
          "foreName" : section2Data.foreName,
          "prefferedName" : section2Data.prefferedName,
          "gender" : section2Data.gender,
          "email" : section2Data.email,
          "confirmEmail" : section2Data.confirmEmail,
          "permanentResidenceCountry" : section2Data.permanentResidenceCountry,
          "dateOfBirth" : section2Data.dateOfBirth,
          "CountryOfBirth" : section2Data.CountryOfBirth,
          "passportNumber" : section2Data.passportNumber,
          "requireVisaForUK" : section2Data.requireVisaForUK,
          "ethnicity" : section2Data.ethnicity,
          "disability" : section2Data.disability,
          "descriptionForDisablity" : section2Data.descriptionForDisablity,
          "criminalConviction" : section2Data.criminalConviction,
          "descriptionForCriminalConviction" : section2Data.descriptionForCriminalConviction,
        })
      }
  }

  get f() { return this.section1Form.controls; }

  saveAndQuit(){
    this.submitted = true
    if (this.section1Form.invalid) {
      return;
    }
    console.log("value--->",this.section1Form.value)


  }

  continue(){
    this.submitted = true;
    if(this.section1Form.invalid){
      return false
    }
    localStorage.setItem('section2',JSON.stringify(this.section1Form.value))
    this.router.navigateByUrl('section3');
  }

  fillForm(){
    let formDetailsDto = {
      "aboutReference1": "",
      "aboutReference2": "",
      "academicQualificationFormDto": [
        {
          "academicQualifications": "",
          "achieved": "",
          "countryOfStudy": "",
          "enddate": "2020-08-10T06:38:34.788Z",
          "highestAcademicQualification": "",
          "instituteName": "",
          "resultType": "",
          "startDate": "2020-08-10T06:38:34.788Z",
          "subject1": "",
          "subject1grade1": "",
          "subject1grade2": "",
          "subject2": "",
          "value": 0
        }
      ],
      "address": "",
      "addressForMba": "",
      "applicationStatus": "CONDITIONAL_OFFER",
      "applyForExternalFunding": true,
      "applyForExternalFundingDescription": "",
      "areResponsibleForWorkingWithBudgets": true,
      "arehavecreativetalent": true,
      "awardedDate": "2020-08-10T06:38:34.788Z",
      "briefDuties": "",
      "coOrdinatingTeam": "",
      "contactEmail": "",
      "country": "",
      "countryOfBirth": "",
      "courseCountry": "",
      "courseEnddate": "2020-08-10T06:38:34.788Z",
      "courseId": 0,
      "courseName": "",
      "courseSttartDate": "2020-08-10T06:38:34.788Z",
      "currentEmployment": "",
      "dateAppointed": "2020-08-10T06:38:34.788Z",
      "dates": "2020-08-10T06:38:34.788Z",
      "description": "",
      "descriptionForMba": "",
      "disability": true,
      "doUoyRequireVisatoStudtInTheUk": true,
      "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": true,
      "dob": "",
      "email": "",
      "emailForMba": "",
      "employerName": "",
      "employersName": "",
      "formFillStatus": "",
      "forname": "",
      "gender": "MALE",
      "graduateWorkExperience": 0,
      "grossAnnualSalary": 0,
      "homeAddress": "",
      "homeEmail": "",
      "homeTeliphoneNo": 0,
      "homeTeliphoneNo2": 0,
      "isPersionalStatementFeel": true,
      "isresponsibility": true,
      "jobTitle": "",
      "managementWorkExperience": 0,
      "matchingUniversityDto": [
        {
          "universityEmail": "",
          "universityId": 0,
          "universityName": ""
        }
      ],
      "meetingFinancial": "",
      "multiCulturalAxposure": "",
      "natureofEmployersBusiness": "",
      "operationaActivities": "",
      "pageFillNumber": "",
      "passportNumber": "",
      "permanentResidenceCountry": "",
      "persionalDescription": "",
      "pgtJobTitle": "",
      "phoneNo": 0,
      "preferredName": "",
      "primarilyAchieves": "",
      "processesOrTechnology": "",
      "professionalBodyMembership": "",
      "professionalQualificationSubject": "",
      "qualificationTitle": "",
      "referee1Address": "",
      "referee1Name": "",
      "referee1TelephoneNumber": 0,
      "referee1Title": "",
      "referee2Address": "",
      "referee2Name": "",
      "referee2TelephoneNumber": 0,
      "referee2Title": "",
      "relevantCriminalConvictions": true,
      "representativeId": 0,
      "representativeName": "",
      "requireSpecificTechnical": "",
      "researchProposalForPGR": true,
      "researchProposalForPGRDescription": "",
      "responsibleForManageProject": true,
      "responsibleFordeployCreativetalent": true,
      "sirName": "",
      "solveProblemsAndDeliverResults": "",
      "state": "",
      "technicalResponsibility": true,
      "telephoneNo": 0,
      "telephoneNumber": 0,
      "title": "",
      "totalWorkExperience": 0,
      "universityId": 0,
      "urlCv": "",
      "urlDegree": "",
      "urlDocuments": "",
      "urlEnglishLanguageCertificate": "",
      "urlResearchProposal": "",
      "urlStatement": "",
      "urlTranscript": "",
      "urlpersonalStatement": "",
      "wishtoApplyForUniversityFunding": true,
      "wishtoApplyForUniversityFundingDescription": "",
      "wishtoApplyForUniversityscholarship": true,
      "wishtoApplyForUniversityscholarshipDescription": "",
      "zipcode": 0
    }
    this.service.postApi(`course/form-fill-up-as-a-user`,formDetailsDto,1).subscribe((res:any) => {
      console.log("res-->",res)
    })
  }
}