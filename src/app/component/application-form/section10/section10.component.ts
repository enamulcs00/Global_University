import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-section10',
  templateUrl: './section10.component.html',
  styleUrls: ['./section10.component.css']
})
export class Section10Component implements OnInit {

  section10Form:FormGroup
  researchForPGR:boolean = false
  submitted :boolean = false;
  section1Data :any
  section2Data :any
  section3Data :any
  section4Data :any
  section5Data :any
  section6Data :any
  section7Data :any
  section8Data: any;
  section9Data: any;
  academicQualificationFormDto :any = []

  constructor(private router:Router,private service:ServicesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
    this.getAccount()
  }
  
  getAccount(){
    this.service.showSpinner()
     this.service.getApi('account/my-account', 1).subscribe((res : any) => {
      if(res.body.status == 200){
          this.service.hideSpinner()
      }
    })
  }

  initializeForm(){
    this.section10Form = new FormGroup({
      researchProposal: new FormControl(null,Validators.required),
      researchProposalDescription: new FormControl('')
    })
    if(localStorage.getItem('section10')){
      let sectionData = JSON.parse(localStorage.getItem('section10'))
      this.section10Form.patchValue({
        researchProposal: sectionData.researchProposal,
        researchProposalDescription: sectionData.researchProposalDescription
      })
    }
  }

  change(event){
    console.log("event->",event.target.value)
    if(event.target.value == "true"){
      this.researchForPGR = true
    }else{
      this.researchForPGR = false
    }
  }

  saveAndQuit(){
    this.submitted = true
    if(this.section10Form.invalid){
      return false;
    }    
    console.log('sectionFOrmdata-->',this.section10Form.value)
    this.fillForm()
  }

  continue(){
    this.submitted = true
    if(this.section10Form.invalid){
      return false;
    }    
    localStorage.setItem('section10',JSON.stringify(this.section10Form.value))
    this.router.navigateByUrl('section11');
  }

  fillForm(){
    this.section1Data = JSON.parse(localStorage.getItem('section1'))
    this.section2Data = JSON.parse(localStorage.getItem('section2'))
    this.section3Data = JSON.parse(localStorage.getItem('section3'))
    this.section4Data = JSON.parse(localStorage.getItem('section4'))
    this.section5Data = JSON.parse(localStorage.getItem('section5'))  // Data not binded as keys not available
    this.section6Data = JSON.parse(localStorage.getItem('section6'))
    this.section7Data = JSON.parse(localStorage.getItem('section7'))
    this.section8Data = JSON.parse(localStorage.getItem('section8'))  // Data not binded as keys not available
    this.section9Data = JSON.parse(localStorage.getItem('section9'))
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
        "subject1": element.subject1,
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
      "areUNativeOfEnglishSpeakingCountry": this.section5Data.nativeOfEnglishSpeakingCountry == 'true'? true : false,
      "arehavecreativetalent": true,
      "awardedDate": this.section6Data.date + 'T00:00:00.000Z',
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
      "criminalDescription": this.section2Data.criminalConviction,
      "currentEmployment": "",
      "dateAppointed": "",
      "dateTaken": "",
      "dates": "",
      "description": this.section2Data.descriptionForDisablity,
      "descriptionForMba": "",
      "disability": this.section2Data.disability == 'true' ? true: false,
      "doUHaveprofessionalQualification": this.section5Data.professionalQualification == 'true' ? true : false,
      "doUoyRequireVisatoStudtInTheUk": this.section2Data.requireVisaForUK  == 'true'? true : false,
      "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": this.section9Data.currentlyFundingForStudy == 'true' ? true :false,
      "dob": this.section2Data.dateOfBirth + 'T00:00:00.000Z',
      "email": this.section2Data.email,
      "emailForMba": "",
      "employerName": "",
      "employersName": "",
      "ethenticity": this.section2Data.ethnicity,
      "formFillStatus": "INCOMPLETE",
      "formId": 0,
      "forname": this.section2Data.foreName,
      "gender": this.section2Data.gender,
      "graduateWorkExperience": 0,
      "grossAnnualSalary": 0,
      "homeAddress": this.section3Data.homeAddress,
      "homeEmail":  this.section3Data.homeEmail,
      "homeTeliphoneNo": Object.keys(this.section3Data.homeTelephoneNo).length != 0 ? this.section3Data.homeTelephoneNo.internationalNumber: this.section3Data.homeTelephoneNo,
      "homeTeliphoneNo2": Object.keys(this.section3Data.homeTelephoneNo1).length != 0 ? this.section3Data.homeTelephoneNo1.internationalNumber: this.section3Data.homeTelephoneNo1,
      "ifNoThenAddAboutRecentEnglishLanguage": this.section5Data.englishLanguageTestDetails,
      "ifNoThenAddHighestEnglishQualification": this.section5Data.highestAcedemicQualification,
      "ifYesSelectCountryForSpeakingCountry": this.section5Data.nativeEnglishSpeakingCountryName,
      "ifYesThenAddProfessionalQualification": this.section5Data.englishQualificationName,
      "indivisualBandScore1": this.section5Data.englishQualificationScore1,
      "indivisualBandScore2": this.section5Data.englishQualificationScore2,
      "indivisualBandScore3": this.section5Data.englishQualificationScore3,
      "indivisualBandScore4": this.section5Data.englishQualificationScore4,
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
      "overallResult": "",
      "overallResultForEnglishQualification": this.section5Data.overallResult,
      "pageFillNumber": "section10",
      "passportNumber": this.section2Data.passportNumber,
      "permanentResidenceCountry": this.section2Data.permanentResidenceCountry,
      "persionalDescription": "",
      "personalStatementDescription": this.section8Data.description,
      "pgtJobTitle": "",
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
      "referee1Email": this.section7Data.refree1email,
      "referee2Email": this.section7Data.refree2email,
      "relevantCriminalConvictions": this.section2Data.criminalConviction == "true" ? true  : false,
      "representativeId": 0,
      "representativeName": "",
      "requireSpecificTechnical": "",
      "researchProposalDescription": "",
      "researchProposalForPGR": this.section10Form.value.researchProposal ? true : false,
      "researchProposalForPGRDescription": this.section10Form.value.researchProposalDescription,
      "responsibleForManageProject": true,
      "responsibleFordeployCreativetalent": true,
      "resultType": "",
      "selectCountry": "",
      "sirName": this.section2Data.surName,
      "solveProblemsAndDeliverResults": "",
      "state": this.section3Data.state,
      "technicalResponsibility": true,
      "telephoneNo": Object.keys(this.section3Data.telephoneNo).length != 0 ? this.section3Data.telephoneNo.internationalNumber: this.section3Data.telephoneNo,
      "telephoneNumber": Object.keys(this.section3Data.contactPhoneNo).length != 0 ? this.section3Data.contactPhoneNo.internationalNumber: this.section3Data.contactPhoneNo,
      "title": this.section2Data.title,
      "totalWorkExperience": 0,
      "typeOfEnglishQualification": this.section5Data.typeOfEnglishQualification,
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
      // console.log("res-->",res)
      // this.service.hideSpinner()
      // localStorage.removeItem('section1')
      // $('#exampleModalCenter').modal('show')
    // })
  }
}