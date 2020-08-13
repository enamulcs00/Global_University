import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit {

  submitted :boolean = false;
  section6Form :FormGroup;
  section1Data:any;
  section2Data:any
  section3Data:any
  section4Data:any
  academicQualificationFormDto:any = []
  section5Data: any;

  constructor(private router:Router,private service:ServicesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm() {
    this.section6Form = new FormGroup({
      title : new FormControl(null,Validators.required),
      subject : new FormControl(null,Validators.required),
      date : new FormControl(null,Validators.required),
      proffessionalBody : new FormControl(null,Validators.required),
    })
    if(localStorage.getItem('section6')){
      let sectionData  = JSON.parse(localStorage.getItem('section6'))
      this.section6Form.setValue({
        title : sectionData.title,
        subject : sectionData.subject,
        date : sectionData.date,
        proffessionalBody : sectionData.proffessionalBody,
      })
    }
  }

  saveAndQuit() {
    this.submitted = true
    if(this.section6Form.invalid){
      return false
    }
    this.fillForm()
  }

  continue(){
    this.submitted = true
    if(this.section6Form.invalid){
      return false
    }
    localStorage.setItem('section6',JSON.stringify(this.section6Form.value))
    this.router.navigateByUrl('section7')
  }

  fillForm(){
    this.section1Data = JSON.parse(localStorage.getItem('section1'))
    this.section2Data = JSON.parse(localStorage.getItem('section2'))
    this.section3Data = JSON.parse(localStorage.getItem('section3'))
    this.section4Data = JSON.parse(localStorage.getItem('section4'))
    this.section5Data = JSON.parse(localStorage.getItem('section5'))  // Data not binded as keys not available
    this.section4Data.qualificationArr.forEach(element => {
      this.academicQualificationFormDto.push( {
        "academicQualifications": element.qualification,
        "achieved": this.section4Data.achieved,
        "countryOfStudy": element.country,
        "enddate": element.endDate,
        "highestAcademicQualification": this.section4Data.stateHighestQualification,
        "instituteName": element.institutionName,
        "resultType": element.resultGrade,
        "startDate": element.startDate + 'T00:00:00.000Z',
        "subject1": element.subject1 + 'T00:00:00.000Z',
        "subject1grade1": element.subject1Grade,
        "subject1grade2": element.subject2,
        "subject2": element.subject2Grade,
        "value": 0
      })
    });
    let formDetailsDto = {
      "aboutReference1": "",
      "aboutReference2": "",
      "academicQualificationFormDto": this.academicQualificationFormDto,
      "address": this.section3Data.address,
      "addressForMba": "",
      "applicationStatus": "CONDITIONAL_OFFER",
      "applyForExternalFunding": true,
      "applyForExternalFundingDescription": "",
      "areResponsibleForWorkingWithBudgets": true,
      "arehavecreativetalent": true,
      "awardedDate": this.section6Form.value.date + 'T00:00:00.000Z',
      "briefDuties": "",
      "coOrdinatingTeam": "",
      "contactEmail": this.section3Data.email,
      "country": this.section3Data.country,
      "countryOfBirth": this.section2Data.CountryOfBirth,
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
      "doUoyRequireVisatoStudtInTheUk": this.section2Data.requireVisaForUK  == 'true'? true : false,
      "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": true,
      "dob": this.section2Data.dateOfBirth + 'T00:00:00.000Z',
      "email": this.section2Data.email,
      "emailForMba": "",
      "employerName": "",
      "employersName": "",
      "formFillStatus": "INCOMPLETE",
      "forname": this.section2Data.foreName,
      "gender": this.section2Data.gender,
      "graduateWorkExperience": 0,
      "grossAnnualSalary": 0,
      "homeAddress": this.section3Data.homeAddress,
      "homeEmail":  this.section3Data.homeEmail,
      "homeTeliphoneNo": Object.keys(this.section3Data.homeTelephoneNo).length != 0 ? this.section3Data.homeTelephoneNo.internationalNumber: this.section3Data.homeTelephoneNo,
      "homeTeliphoneNo2": Object.keys(this.section3Data.homeTelephoneNo1).length != 0 ? this.section3Data.homeTelephoneNo1.internationalNumber: this.section3Data.homeTelephoneNo1,
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
      "pageFillNumber": "section1",
      "passportNumber": this.section2Data.passportNumber,
      "permanentResidenceCountry": this.section2Data.permanentResidenceCountry,
      "persionalDescription": "",
      "pgtJobTitle": "",
      "phoneNo": 0,
      "preferredName": this.section2Data.prefferedName,
      "primarilyAchieves": "",
      "processesOrTechnology": "",
      "professionalBodyMembership": this.section6Form.value.proffessionalBody,
      "professionalQualificationSubject": this.section6Form.value.subject,
      "qualificationTitle": this.section6Form.value.title,
      "referee1Address": "",
      "referee1Name": "",
      "referee1TelephoneNumber": 0,
      "referee1Title": "",
      "referee2Address": "",
      "referee2Name": "",
      "referee2TelephoneNumber": 0,
      "referee2Title": "",
      "relevantCriminalConvictions": this.section2Data.criminalConviction == "YES" ? true  : false,
      "representativeId": 0,
      "representativeName": "",
      "requireSpecificTechnical": "",
      "researchProposalForPGR": true,
      "researchProposalForPGRDescription": "",
      "responsibleForManageProject": true,
      "responsibleFordeployCreativetalent": true,
      "sirName": this.section2Data.surName,
      "solveProblemsAndDeliverResults": "",
      "state": this.section3Data.state,
      "technicalResponsibility": true,
      "telephoneNo": Object.keys(this.section3Data.telephoneNo).length != 0 ? this.section3Data.telephoneNo.internationalNumber: this.section3Data.telephoneNo,
      "telephoneNumber": Object.keys(this.section3Data.contactPhoneNo).length != 0 ? this.section3Data.contactPhoneNo.internationalNumber: this.section3Data.contactPhoneNo,
      "title": this.section2Data.title,
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
      "zipcode": this.section3Data.zipCode
    }
    console.log("form--->",formDetailsDto)
    // this.service.postApi(`course/form-fill-up-as-a-user`,formDetailsDto,1).subscribe((res:any) => {
    //   console.log("res-->",res)
    // })
  }
}