import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-section14',
  templateUrl: './section14.component.html',
  styleUrls: ['./section14.component.css']
})
export class Section14Component implements OnInit {

  section14Form:FormGroup;
  submitted:boolean = false

  constructor(private router:Router,private service:ServicesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
    this.section14Form = new FormGroup({
      "graduateWorkExperience" : new FormControl(null,Validators.required),
      "totalExperience" : new FormControl(null,Validators.required),
      "autonomyAndResponsibility" : new FormControl(null,Validators.required),
      "technicalExpertKnowledge" : new FormControl(null,Validators.required),
      "contributions" : new FormControl(null,Validators.required),
      "keyDecision" : new FormControl(null,Validators.required),
      "managingProjects" : new FormControl(null,Validators.required),
      "managingBudget" : new FormControl(null,Validators.required),
      "evidenceOfCarrerProgession" : new FormControl(null,Validators.required),
    })
    if(localStorage.getItem('section13')){
      let section14Data = JSON.parse(localStorage.getItem('section13'))
      this.section14Form.setValue({
        "graduateWorkExperience" :  section14Data.graduateWorkExperience,
        "totalExperience" :  section14Data.totalExperience,
        "autonomyAndResponsibility" :  section14Data.autonomyAndResponsibility,
        "technicalExpertKnowledge" :  section14Data.technicalExpertKnowledge,
        "contributions" :  section14Data.contributions,
        "keyDecision" :  section14Data.keyDecision,
        "managingProjects" :  section14Data.managingProjects,
        "managingBudget" :  section14Data.managingBudget,
        "evidenceOfCarrerProgession" :  section14Data.evidenceOfCarrerProgession,
      })
    }
  }

  saveAndQuit(){
    this.submitted = true
    if(this.section14Form.invalid){
      return false
    }    
  }

  continue(){
    this.submitted = true
    if(this.section14Form.invalid){
      return false
    }
    this.router.navigateByUrl('section14')
    localStorage.setItem('section13',JSON.stringify(this.section14Form.value))
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