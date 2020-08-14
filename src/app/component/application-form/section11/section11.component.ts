import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-section11',
  templateUrl: './section11.component.html',
  styleUrls: ['./section11.component.css']
})
export class Section11Component implements OnInit {

  section11Form :FormGroup;
  workExperience:boolean = false
  submitted:boolean = false
  section1Data :any
  section2Data :any
  section3Data :any
  section4Data :any
  section5Data :any
  section6Data :any
  section7Data :any
  section8Data: any;
  section9Data: any;
  section10Data: any;
  academicQualificationFormDto :any = []

  constructor(private router:Router,private service:ServicesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm() {
    this.section11Form = new FormGroup({
      "workExperience" : new FormControl(null,Validators.required),
      "totalExperience" : new FormControl(0),
      "employersName" : new FormControl(null,Validators.required),
      "employersBusiness" : new FormControl(null,Validators.required),
      "jobTitle" : new FormControl(null,Validators.required),
      "briefDuties" : new FormControl(null,Validators.required),
      "employedFrom" : new FormControl(null,Validators.required),
      "employedTo" : new FormControl(null),
      "annualSalary" : new FormControl(null,Validators.required),
      "employersAddress" : new FormControl(null,Validators.required),
      "email" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
      "achievements" : new FormControl(null,Validators.required),
    })
    if(localStorage.getItem('section11')){
      let section11Data = JSON.parse(localStorage.getItem('section11'))
      this.section11Form.setValue({
        "workExperience" : section11Data.workExperience,
        "totalExperience" : section11Data.totalExperience,
        "employersName" : section11Data.employersName,
        "employersBusiness" : section11Data.employersBusiness,
        "jobTitle" : section11Data.jobTitle,
        "briefDuties" : section11Data.briefDuties,
        "employedFrom" : section11Data.employedFrom,
        "employedTo" : section11Data.employedTo,
        "annualSalary" : section11Data.annualSalary,
        "employersAddress" : section11Data.employersAddress,
        "email" : section11Data.email,
        "achievements" : section11Data.achievements,
      })
      this.change(section11Data.workExperience)
    }
  }


  change(event){
    if(event == "true"){
      this.workExperience = true
    }else{
      this.workExperience = false
    }
  }

  saveAndQuit(){
    this.submitted = true
    if(this.section11Form.invalid){
      return false
    }
    console.log("section11Form-->",this.section11Form.value)
    this.fillForm()
  }
  
  continue(){
    this.submitted = true
    if(this.section11Form.invalid){
      return false
    }
    localStorage.setItem('section11',JSON.stringify(this.section11Form.value))
    this.router.navigateByUrl('section12')
  }


  fillForm(){
    this.section1Data  = JSON.parse(localStorage.getItem('section1'))
    this.section2Data  = JSON.parse(localStorage.getItem('section2'))
    this.section3Data  = JSON.parse(localStorage.getItem('section3'))
    this.section4Data  = JSON.parse(localStorage.getItem('section4'))
    this.section5Data  = JSON.parse(localStorage.getItem('section5'))  // Data not binded as keys not available
    this.section6Data  = JSON.parse(localStorage.getItem('section6'))
    this.section7Data  = JSON.parse(localStorage.getItem('section7'))
    this.section8Data  = JSON.parse(localStorage.getItem('section8'))  // Data not binded as keys not available
    this.section9Data  = JSON.parse(localStorage.getItem('section9'))
    this.section10Data = JSON.parse(localStorage.getItem('section10'))
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
        "aboutReference1": this.section7Data.refree1Description,
        "aboutReference2": this.section7Data.refree2Description,
        "academicQualificationFormDto": this.academicQualificationFormDto,
        "address": this.section3Data.address,
        "addressForMba": "",
        "applicationStatus": "CONDITIONAL_OFFER",
        "applyForExternalFunding": this.section9Data.applyForExternalFunding == 'true' ? true:false,
        "applyForExternalFundingDescription": this.section9Data.externalFundingDescription,
        "areResponsibleForWorkingWithBudgets": true,
        "arehavecreativetalent": true,
        "awardedDate": this.section6Data.date + 'T00:00:00.000Z',
        "briefDuties": this.section11Form.value.briefDuties,
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
        "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": this.section9Data.currentlyFundingForStudy == 'true' ? true :false,
        "dob": this.section2Data.dateOfBirth + 'T00:00:00.000Z',
        "email": this.section2Data.email,
        "emailForMba": "",
        "employerName": "",
        "employersName": this.section11Form.value.employersName,
        "formFillStatus": "INCOMPLETE",
        "forname": this.section2Data.foreName,
        "gender": this.section2Data.gender,
        "graduateWorkExperience": 0,
        "grossAnnualSalary": Number(this.section11Form.value.annualSalary),
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
        "pgtJobTitle": this.section11Form.value.jobTitle,
        "phoneNo": 0,
        "preferredName": this.section2Data.prefferedName,
        "primarilyAchieves": "",
        "processesOrTechnology": "",
        "professionalBodyMembership": this.section6Data.proffessionalBody,
        "professionalQualificationSubject": this.section6Data.subject,
        "qualificationTitle": this.section6Data.title,
        "referee1Address": this.section7Data.refree1address,
        "referee1Name": this.section7Data.refree1name,
        "referee1TelephoneNumber":Object.keys(this.section7Data.refree1phoneNumber).length != 0 ? this.section7Data.refree1phoneNumber.internationalNumber: this.section7Data.refree1phoneNumber,
        "referee1Title": this.section7Data.refree1title,
        "referee2Address": this.section7Data.refree2address,
        "referee2Name":  this.section7Data.refree2name,
        "referee2TelephoneNumber": Object.keys(this.section7Data.refree2phoneNumber).length != 0 ? this.section7Data.refree2phoneNumber.internationalNumber: this.section7Data.refree2phoneNumber,
        "referee2Title": this.section7Data.refree2title,
        "relevantCriminalConvictions": this.section2Data.criminalConviction == "YES" ? true  : false,
        "representativeId": 0,
        "representativeName": "",
        "requireSpecificTechnical": "",
        "researchProposalForPGR": this.section10Data.researchProposal ? true : false,
        "researchProposalForPGRDescription": this.section10Data.researchProposalDescription,
        "responsibleForManageProject": true,
        "responsibleFordeployCreativetalent": true,
        "sirName": this.section2Data.surName,
        "solveProblemsAndDeliverResults": "",
        "state": this.section3Data.state,
        "technicalResponsibility": true,
        "telephoneNo": Object.keys(this.section3Data.telephoneNo).length != 0 ? this.section3Data.telephoneNo.internationalNumber: this.section3Data.telephoneNo,
        "telephoneNumber": Object.keys(this.section3Data.contactPhoneNo).length != 0 ? this.section3Data.contactPhoneNo.internationalNumber: this.section3Data.contactPhoneNo,
        "title": this.section2Data.title,
        "totalWorkExperience": this.section11Form.value.totalExperience,
        "universityId": 0,
        "urlCv": "",
        "urlDegree": "",
        "urlDocuments": "",
        "urlEnglishLanguageCertificate": "",
        "urlResearchProposal": "",
        "urlStatement": "",
        "urlTranscript": "",
        "urlpersonalStatement": "",
        "wishtoApplyForUniversityFunding": this.section9Data.applyForUniversityFunding == 'true' ? true :false,
        "wishtoApplyForUniversityFundingDescription": this.section9Data.universityFundingDescription,
        "wishtoApplyForUniversityscholarship": this.section9Data.wishForUniversityScholarship == 'true' ? true :false,
        "wishtoApplyForUniversityscholarshipDescription": this.section9Data.wishForUniversityScholarshipDescription,
        "zipcode": this.section3Data.zipCode
    }
    console.log("form--->",formDetailsDto)
    // this.service.postApi(`course/form-fill-up-as-a-user`,formDetailsDto,1).subscribe((res:any) => {
    //   console.log("res-->",res)
    // })
  }
}