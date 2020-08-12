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