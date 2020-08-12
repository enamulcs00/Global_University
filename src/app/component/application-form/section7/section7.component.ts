import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component implements OnInit {

  section7Form : FormGroup;
  submitted :boolean = false
  TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom,CountryISO.India];
  SearchCountryField = SearchCountryField;
  validPhoneNo1:Boolean = true
  validPhoneNo2:Boolean = true

  constructor(private router:Router,private service:ServicesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm() {
    this.section7Form = new FormGroup({
      refree1name: new FormControl(null,Validators.required),
      refree1title: new FormControl(null,Validators.required),
      refree1address: new FormControl(null,Validators.required),
      refree1phoneNumber : new FormControl(null,Validators.required),
      refree1email : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
      refree1Description : new FormControl(null,Validators.required),
      refree2name: new FormControl(null,Validators.required),
      refree2title: new FormControl(null,Validators.required),
      refree2address: new FormControl(null,Validators.required),
      refree2phoneNumber : new FormControl(null,Validators.required),
      refree2email : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
      refree2Description : new FormControl(null,Validators.required),
    })
    if(localStorage.getItem('section7')){
      let section7Data = JSON.parse(localStorage.getItem('section7'));
      this.section7Form.setValue({
        refree1name: section7Data.refree1name,
        refree1title: section7Data.refree1title,
        refree1address: section7Data.refree1address,
        refree1phoneNumber : section7Data.refree1phoneNumber,
        refree1email : section7Data.refree1email,
        refree1Description : section7Data.refree1Description,
        refree2name: section7Data.refree2name,
        refree2title: section7Data.refree2title,
        refree2address: section7Data.refree2address,
        refree2phoneNumber : section7Data.refree2phoneNumber,
        refree2email : section7Data.refree2email,
        refree2Description : section7Data.refree2Description,
      })
    }
  }

  phoneValidOrNot1(){
    let key = this.section7Form.controls['refree1phoneNumber'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validPhoneNo1 = key['validatePhoneNumber'].valid
      }else{
        this.validPhoneNo1 = true
      }
    }else{
      this.validPhoneNo1 = true
    }
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  phoneValidOrNot2(){
    let key = this.section7Form.controls['refree2phoneNumber'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validPhoneNo2 = key['validatePhoneNumber'].valid
      }else{
        this.validPhoneNo2 = true
      }
    }else{
      this.validPhoneNo2 = true
    }
  }



  saveAndQuit(){
    this.submitted = true;
    if(this.section7Form.invalid){
      return false
    }
    console.log("save -->",this.section7Form.value)
  }


  continue(){
    this.submitted = true;
    if(this.section7Form.invalid){
      return false
    }
    localStorage.setItem('section7',JSON.stringify(this.section7Form.value))
    this.router.navigateByUrl('section8')
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