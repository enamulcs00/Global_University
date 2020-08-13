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
  section1Data: any;

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
    this.section1Data = JSON.parse(localStorage.getItem('section1'))
    this.fillForm()
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
          "enddate": "",
          "highestAcademicQualification": "",
          "instituteName": "",
          "resultType": "",
          "startDate": "",
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
      "awardedDate": "",
      "briefDuties": "",
      "coOrdinatingTeam": "",
      "contactEmail": "",
      "country": "",
      "countryOfBirth": this.section1Form.value.CountryOfBirth,
      "courseCountry": this.section1Data.countryName,
      "courseEnddate": "",
      "courseId": this.section1Data.courseId,
      "courseName": this.section1Data.searchCourse,
      "courseSttartDate": this.section1Data.courseStartDate,
      "currentEmployment": "",
      "dateAppointed": "",
      "dates": "",
      "description": "",
      "descriptionForMba": "",
      "disability": true,
      "doUoyRequireVisatoStudtInTheUk": this.section1Form.value.requireVisaForUK  == 'true'? true : false,
      "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": true,
      "dob": this.section1Form.value.dateOfBirth + 'T00:00:00.000Z',
      "email": this.section1Form.value.email,
      "emailForMba": "",
      "employerName": "",
      "employersName": "",
      "formFillStatus": "INCOMPLETE",
      "forname": this.section1Form.value.foreName,
      "gender": this.section1Form.value.gender,
      "graduateWorkExperience": 0,
      "grossAnnualSalary": 0,
      "homeAddress": "",
      "homeEmail": "",
      "homeTeliphoneNo": 0,
      "homeTeliphoneNo2": 0,
      "intakeNotApply": "",
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
      "pageFillNumber": "section2",
      "passportNumber": this.section1Form.value.passportNumber,
      "permanentResidenceCountry": this.section1Form.value.permanentResidenceCountry,
      "persionalDescription": "",
      "pgtJobTitle": "",
      "phoneNo": 0,
      "preferredName": this.section1Form.value.prefferedName,
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
      "relevantCriminalConvictions": this.section1Form.value.criminalConviction == "YES" ? true  : false,
      "representativeId": 0,
      "representativeName": "",
      "requireSpecificTechnical": "",
      "researchProposalForPGR": true,
      "researchProposalForPGRDescription": "",
      "responsibleForManageProject": true,
      "responsibleFordeployCreativetalent": true,
      "sirName": this.section1Form.value.surName,
      "solveProblemsAndDeliverResults": "",
      "state": "",
      "technicalResponsibility": true,
      "telephoneNo": 0,
      "telephoneNumber": 0,
      "title": this.section1Form.value.title,
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
    console.log("form--->",formDetailsDto)
    // this.service.postApi(`course/form-fill-up-as-a-user`,formDetailsDto,1).subscribe((res:any) => {
    //   console.log("res-->",res)
    // })
  }
}