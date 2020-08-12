import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section13',
  templateUrl: './section13.component.html',
  styleUrls: ['./section13.component.css']
})
export class Section13Component implements OnInit {
  fileData: any;
  section13Form:FormGroup;
  submitted :Boolean = false;

  constructor(private service :ServicesService,private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
    this.section13Form = new FormGroup({
      "personalStatement" : new FormControl(null,Validators.required),
      "researchPersonal" : new FormControl(null,Validators.required),
      "cv" : new FormControl(null,Validators.required),
      "transcript" : new FormControl(null,Validators.required),
      "degreeCertificate" : new FormControl(null,Validators.required),
      "englishLanguageCertificate" : new FormControl(null,Validators.required),
      "otherDocument" : new FormControl(null,Validators.required),
      "disclaimer" : new FormControl(null,Validators.required),
    })
    if(localStorage.getItem('section12')){
      let section12Data = JSON.parse(localStorage.getItem('section12'))
      this.section13Form.setValue({
        "personalStatement" : section12Data.personalStatement,
        "researchPersonal" : section12Data.researchPersonal,
        "cv" : section12Data.cv,
        "transcript" : section12Data.transcript,
        "degreeCertificate" : section12Data.degreeCertificate,
        "englishLanguageCertificate" : section12Data.englishLanguageCertificate,
        "otherDocument" : section12Data.otherDocument,
        "disclaimer" : section12Data.disclaimer,
      })
    }
  }


  handleFileInput(event,key) {
    console.log(event)
    if (event.target.files && event.target.files[0]) {
      var type = event.target.files[0].type;
      this.fileData = event.target.files[0];
      this.uploadFile(key)
      // if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
      //   var reader = new FileReader()
      //   reader.onload = (e) => {
      //   }
      // }
    }
  }

  uploadFile(key) {
    var formData = new FormData()
    formData.append('file', this.fileData)
    this.service.postMethodMultipart('account/upload-file', formData).subscribe((res) => {
      this.section13Form.controls[key].setValue(res.data);
      console.log(res.data)
    })
  }

  saveAndQuit(){
    this.submitted = true;
    if(this.section13Form.invalid){
      return false
    }
    console.log("save-->",this.section13Form.value)
  }

  continue(){
    this.submitted = true;
    if(this.section13Form.invalid){
      return false
    }
    localStorage.setItem('section12',JSON.stringify(this.section13Form.value))
    this.router.navigateByUrl('section13')

    // this.router.navigateByUrl('application-form-preview')
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