import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ServicesService } from 'src/app/services.service';
declare var $:any;
@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

  section5Form :FormGroup;
  submitted:boolean = false
  countryList:any = []
  globalEnglishAcademicList:any = []
  globalEnglishQualificationList:any = []
  resultTypeList:any = []
  section1Data: any;
  section2Data: any;
  section3Data: any;
  resultType: any = 'text';
  section4Data: any;
  academicQualificationFormDto: any = [];

  constructor(private router:Router,private service:ServicesService) { }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
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
      this.section5Form = new FormGroup({
          "nativeOfEnglishSpeakingCountry" : new FormControl(null,Validators.required),
          "nativeEnglishSpeakingCountryName" : new FormControl(""),
          "englishLanguageTestDetails" : new FormControl(""),
          "professionalQualification" : new FormControl(null,Validators.required),
          "englishQualificationName" : new FormControl(""),
          "englishQualificationDate" : new FormControl(''),
          "englishQualificationScore1" : new FormControl(''),
          "englishQualificationScore2" : new FormControl(''),
          "englishQualificationScore3" : new FormControl(''),
          "englishQualificationScore4" : new FormControl(''),
          "highestAcedemicQualification" : new FormControl(''),
          "typeOfEnglishQualification" : new FormControl(''),
          "resultType" : new FormControl(null,Validators.required),
          "overallResult" : new FormControl(null,Validators.required),
      })
      this.getAdminData()
      if(localStorage.getItem('section5')){
        console.log("-->",localStorage.getItem('section5'))
        let section5Data = JSON.parse(localStorage.getItem('section5'));
        this.section5Form.setValue({
          "nativeOfEnglishSpeakingCountry" :  section5Data.nativeOfEnglishSpeakingCountry,
          "nativeEnglishSpeakingCountryName" :  section5Data.nativeEnglishSpeakingCountryName,
          "englishLanguageTestDetails" :  section5Data.englishLanguageTestDetails,
          "professionalQualification" :  section5Data.professionalQualification,
          "englishQualificationName" :  section5Data.englishQualificationName,
          "englishQualificationDate" :  section5Data.englishQualificationDate,
          "englishQualificationScore1" :  section5Data.englishQualificationScore1,
          "englishQualificationScore2" :  section5Data.englishQualificationScore2,
          "englishQualificationScore3" :  section5Data.englishQualificationScore3,
          "englishQualificationScore4" :  section5Data.englishQualificationScore4,
          "highestAcedemicQualification" :  section5Data.highestAcedemicQualification,
          "typeOfEnglishQualification" :  section5Data.typeOfEnglishQualification,
          "resultType" :  section5Data.resultType,
          "overallResult" :  section5Data.overallResult,
        })
        this.gethighestAcedemicQualification(section5Data.highestAcedemicQualification)
      }      
  }

  getAdminData(){
    this.service.showSpinner()
    this.service.getApi(`course/get-search-all-global-english-professional-details?page=0&pagesize=10`,1).subscribe((res:any) => {
      if(res.status == 200){
        console.log("res-->",res.body.data.getAllData.content)
        this.globalEnglishQualificationList = res.body.data.getAllData.content
      }
    })
    this.service.getApi(`course/get-allData-serchByName?page=0&pageSize=1000`,1).subscribe((res:any) => {
      if(res.status == 200){
        this.resultTypeList = res.body.data.allData.content
        console.log("resut -->",this.resultTypeList)
      }
    })
    setTimeout(e => {
      this.service.hideSpinner()
    },3000)
  }

  gethighestAcedemicQualification(event){
    this.service.showSpinner()
    this.service.getApi(`course/get-search-all-global-english-academic-details?page=0&pagesize=10&name=${event}`,1).subscribe((res:any) => {
      this.service.hideSpinner()
      if(res.status == 200){
        this.globalEnglishAcademicList = res.body.data.getDataByName.content
        console.log("res-->>",this.globalEnglishAcademicList)
      }
    })
  }

  changeResult(event){
    let data = this.resultTypeList.filter(x => x.resultName == event.target.value)
    this.resultType = data[0].datatype
  }

  saveAndQuit(){
    this.submitted = true;
    if (this.section5Form.invalid) {
      return false
    }
    console.log("save---->>",this.section5Form)
    this.fillForm()
  }

  selectNativeOfEnglishSpeakingCountry(event){
    console.log('vj--->',event.target.value)  
  }

  continue() {
    this.submitted = true;
    if (this.section5Form.invalid) {
      return false
    }
    localStorage.setItem('section5', JSON.stringify(this.section5Form.value))
    this.router.navigateByUrl('section6');
  }
  

  fillForm(){
    this.section1Data = JSON.parse(localStorage.getItem('section1'))
    this.section2Data = JSON.parse(localStorage.getItem('section2'))
    this.section3Data = JSON.parse(localStorage.getItem('section3'))
    this.section4Data = JSON.parse(localStorage.getItem('section4'))
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
      "aboutReference1": "",
      "aboutReference2": "",
      "academicQualificationFormDto": this.academicQualificationFormDto,
      "address": this.section3Data.address,
      "addressForMba": "",
      "applicationStatus": "CONDITIONAL_OFFER",
      "applyForExternalFunding": true,
      "applyForExternalFundingDescription": "",
      "areResponsibleForWorkingWithBudgets": true,
      "areUNativeOfEnglishSpeakingCountry": this.section5Form.value.nativeOfEnglishSpeakingCountry == 'true'? true : false,
      "arehavecreativetalent": true,
      "awardedDate": "",
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
      "doUHaveprofessionalQualification": this.section5Form.value.professionalQualification == 'true' ? true : false,
      "doUoyRequireVisatoStudtInTheUk": this.section2Data.requireVisaForUK  == 'true'? true : false,
      "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": true,
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
      "homeTeliphoneNo": this.section3Data.homeTelephoneNo ? Object.keys(this.section3Data.homeTelephoneNo).length != 0 ? this.section3Data.homeTelephoneNo.internationalNumber: this.section3Data.homeTelephoneNo : "null",
      "homeTeliphoneNo2": this.section3Data.homeTelephoneNo1 ? Object.keys(this.section3Data.homeTelephoneNo1).length != 0 ? this.section3Data.homeTelephoneNo1.internationalNumber: this.section3Data.homeTelephoneNo1 : "null",
      "ifNoThenAddAboutRecentEnglishLanguage": this.section5Form.value.englishLanguageTestDetails,
      "ifNoThenAddHighestEnglishQualification": this.section5Form.value.highestAcedemicQualification,
      "ifYesSelectCountryForSpeakingCountry": this.section5Form.value.nativeEnglishSpeakingCountryName,
      "ifYesThenAddProfessionalQualification": this.section5Form.value.englishQualificationName,
      "indivisualBandScore1": this.section5Form.value.englishQualificationScore1,
      "indivisualBandScore2": this.section5Form.value.englishQualificationScore2,
      "indivisualBandScore3": this.section5Form.value.englishQualificationScore3,
      "indivisualBandScore4": this.section5Form.value.englishQualificationScore4,
      "intakeNotApply": "",
      "isPersionalStatementFeel": true,
      "isresponsibility": true,
      "jobTitle": "",
      "managementWorkExperience": 0,
      "matchingUniversityDto": [
      ],
      "meetingFinancial": "",
      "multiCulturalAxposure": "",
      "natureofEmployersBusiness": "",
      "operationaActivities": "",
      "overallResult": "",
      "overallResultForEnglishQualification": this.section5Form.value.overallResult,
      "pageFillNumber": "section5",
      "passportNumber": this.section2Data.passportNumber,
      "permanentResidenceCountry": this.section2Data.permanentResidenceCountry,
      "persionalDescription": "",
      "personalStatementDescription": "",
      "pgtJobTitle": "",
      "phoneNo": 0,
      "preferredName": this.section2Data.prefferedName,
      "primarilyAchieves": "",
      "processesOrTechnology": "",
      "professionalBodyMembership": "",
      "professionalQualificationSubject": "",
      "qualificationTitle": "",
      "referee1Address": "",
      "referee1Email": "",
      "referee1Name": "",
      "referee1TelephoneNumber": 0,
      "referee1Title": "",
      "referee2Address": "",
      "referee2Email": "",
      "referee2Name": "",
      "referee2TelephoneNumber": 0,
      "referee2Title": "",
      "relevantCriminalConvictions": this.section2Data.criminalConviction == "true" ? true  : false,
      "representativeId": JSON.parse(localStorage.getItem('myProfile')).representativeDetailsId,
      "representativeName": JSON.parse(localStorage.getItem('myProfile')).representativeName,
      "requireSpecificTechnical": "",
      "researchProposalDescription": "",
      "researchProposalForPGR": true,
      "researchProposalForPGRDescription": "",
      "responsibleForManageProject": true,
      "responsibleFordeployCreativetalent": true,
      "resultType": "",
      "selectCountry": "",
      "sirName": this.section2Data.surName,
      "solveProblemsAndDeliverResults": "",
      "state": this.section3Data.state,
      "technicalResponsibility": true,
      "telephoneNo": this.section3Data.telephoneNo ? (Object.keys(this.section3Data.telephoneNo).length != 0 ? this.section3Data.telephoneNo.internationalNumber: this.section3Data.telephoneNo) : 'null',
      "telephoneNumber": this.section3Data.contactPhoneNo ? (Object.keys(this.section3Data.contactPhoneNo).length != 0 ? this.section3Data.contactPhoneNo.internationalNumber: this.section3Data.contactPhoneNo) : "null",
      "title": this.section2Data.title,
      "totalWorkExperience": 0,
      "typeOfEnglishQualification": this.section5Form.value.typeOfEnglishQualification,
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
    this.service.showSpinner()
    let url = `course/form-fill-up-as-a-user`;
    if(localStorage.getItem('formId')){
      url  = `course/update-form`
      formDetailsDto.formId = JSON.parse(localStorage.getItem('formId'));
    }
    console.log('url--->',url)
    this.service.postApi(url,formDetailsDto,1).subscribe((res:any) => {
      console.log("res-->",res)
      this.service.hideSpinner()
      localStorage.removeItem('section1')
      $('#exampleModalCenter').modal('show')
    })
  }
}