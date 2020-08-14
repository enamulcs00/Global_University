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
  section11Data: any;
  section12Data: any;
  academicQualificationFormDto :any = []

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
    console.log("save-->",this.section14Form.value)
    this.fillForm()
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
    this.section11Data = JSON.parse(localStorage.getItem('section11'))
    this.section12Data = JSON.parse(localStorage.getItem('section12'))
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
      "areResponsibleForWorkingWithBudgets": true,  //this.section14Form.value.managingBudget
      "arehavecreativetalent": true,  //this.section14Form.value.contributions
      "awardedDate": this.section6Data.date + 'T00:00:00.000Z',
      "briefDuties": this.section11Data.briefDuties,
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
      "employersName": this.section11Data.employersName,
      "formFillStatus": "INCOMPLETE",
      "forname": this.section2Data.foreName,
      "gender": this.section2Data.gender,
      "graduateWorkExperience": this.section14Form.value.graduateWorkExperience,
      "grossAnnualSalary": Number(this.section11Data.annualSalary),
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
      "pgtJobTitle": this.section11Data.jobTitle,
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
      "requireSpecificTechnical": this.section14Form.value.technicalExpertKnowledge,
      "researchProposalForPGR": this.section10Data.researchProposal ? true : false,
      "researchProposalForPGRDescription": this.section10Data.researchProposalDescription,
      "responsibleForManageProject": true, //this.section14Form.value.managingProjects
      "responsibleFordeployCreativetalent": true,
      "sirName": this.section2Data.surName,
      "solveProblemsAndDeliverResults": "",
      "state": this.section3Data.state,
      "technicalResponsibility": true, // this.section14Form.value.evidenceOfCarrerProgession
      "telephoneNo": Object.keys(this.section3Data.telephoneNo).length != 0 ? this.section3Data.telephoneNo.internationalNumber: this.section3Data.telephoneNo,
      "telephoneNumber": Object.keys(this.section3Data.contactPhoneNo).length != 0 ? this.section3Data.contactPhoneNo.internationalNumber: this.section3Data.contactPhoneNo,
      "title": this.section2Data.title,
      "totalWorkExperience": this.section11Data.totalExperience,
      "universityId": 0,
      "urlCv": this.section12Data.cv,
      "urlDegree": this.section12Data.degreeCertificate,
      "urlDocuments": this.section12Data.otherDocument,
      "urlEnglishLanguageCertificate": this.section12Data.englishLanguageCertificate,
      "urlResearchProposal": this.section12Data.researchPersonal,
      "urlStatement": this.section12Data.disclaimer,  // disclaimer
      "urlTranscript": this.section12Data.transcript,
      "urlpersonalStatement": this.section12Data.personalStatement,
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