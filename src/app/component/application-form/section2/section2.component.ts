import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  section2Form:FormGroup;
  searchCourse = new FormControl();
  submitted:boolean = false;
  countryList:any = [];
  courseList:any = [];
  yearList:any = [];
  MonthList:any = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  filteredOptions: Observable<string[]>;

  constructor(private service:ServicesService,private router:Router) { }

  ngOnInit() {
    let today = new Date();
    for(let i = -10; i < 10; i++){
      this.yearList.push(today.getFullYear() + i)
    }
    this.getCourses()
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  getCourses(){
    this.service.getApi('course/v1.1/web/search-and-filter-course-details',2).subscribe((res:any) => {
      console.log('res--->',res.body)
      if(res.body.status == 200){
        this.courseList = res.body.data.list;
        this.filteredOptions = this.searchCourse.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      }
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.courseList.filter(option => option.courseName.toLowerCase().includes(filterValue));
  }

  selectCourse(){
    console.log("-->",this.searchCourse.value)
    this.section2Form.patchValue({
      searchCourse : this.searchCourse.value
    })
  }

  initializeForm() {
    this.section2Form = new FormGroup({
      "searchCourse" : new FormControl('',[Validators.required]),
      "countryName" : new FormControl('',[Validators.required]),
      "startYear" : new FormControl('',[Validators.required]),
      "startMonth" : new FormControl('',[Validators.required]),
      "yearIntake" : new FormControl('',[Validators.required]),
    })
    if(localStorage.getItem('section1')){
     let section1data = JSON.parse(localStorage.getItem('section1'))
     this.searchCourse = new FormControl(section1data.searchCourse)
     this.section2Form.setValue({
       "searchCourse" : section1data.searchCourse,
       "countryName" : section1data.countryName,
       "startYear" : section1data.startYear,
       "startMonth" : section1data.startMonth,
       "yearIntake" : section1data.yearIntake,
     })
    }
  }

  saveAndQuit(){
    this.submitted = true;
    if(this.section2Form.invalid){
      return false
    }
    console.log("submit -->>",this.section2Form.value)
    this.fillForm()
  }

  continue(){
    this.submitted = true;
    if(this.section2Form.invalid){
      return false
    }
    localStorage.setItem('section1',JSON.stringify(this.section2Form.value))
    this.router.navigateByUrl('section2');
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
          "enddate": "2020-08-11T05:35:35.107Z",
          "highestAcademicQualification": "string",
          "instituteName": "string",
          "resultType": "string",
          "startDate": "2020-08-11T05:35:35.107Z",
          "subject1": "string",
          "subject1grade1": "string",
          "subject1grade2": "string",
          "subject2": "string",
          "value": 0
        }
      ],
      "address": "string",
      "addressForMba": "string",
      "applicationStatus": "INCOMPLETE",
      "applyForExternalFunding": true,
      "applyForExternalFundingDescription": "string",
      "areResponsibleForWorkingWithBudgets": true,
      "arehavecreativetalent": true,
      "awardedDate": "2020-08-11T05:35:35.107Z",
      "briefDuties": "string",
      "coOrdinatingTeam": "string",
      "contactEmail": "string",
      "country": "string",
      "countryOfBirth": "string",
      "courseCountry": "string",
      "courseEnddate": "2020-08-11T05:35:35.107Z",
      "courseId": 0,
      "courseName": "string",
      "courseSttartDate": "2020-08-11T05:35:35.107Z",
      "currentEmployment": "string",
      "dateAppointed": "2020-08-11T05:35:35.107Z",
      "dates": "2020-08-11T05:35:35.107Z",
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
      "formFillStatus": "string",
      "forname": "string",
      "gender": "MALE",
      "graduateWorkExperience": 0,
      "grossAnnualSalary": 0,
      "homeAddress": "string",
      "homeEmail": "string",
      "homeTeliphoneNo": 0,
      "homeTeliphoneNo2": 0,
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
    // let formDetailsDto = {
    //   "aboutReference1": null,
    //   "aboutReference2": null,
    //   "academicQualificationFormDto": [
    //     {
    //       "academicQualifications": null,
    //       "achieved": null,
    //       "countryOfStudy": null,
    //       "enddate": null,
    //       "highestAcademicQualification": null,
    //       "instituteName": null,
    //       "resultType": null,
    //       "startDate": null,
    //       "subject1": null,
    //       "subject1grade1": null,
    //       "subject1grade2": null,
    //       "subject2": null,
    //       "value": null
    //     }
    //   ],
    //   "address": null,
    //   "addressForMba": null,
    //   "applicationStatus": "INCOMPLETE",
    //   "applyForExternalFunding": null,
    //   "applyForExternalFundingDescription": null,
    //   "areResponsibleForWorkingWithBudgets": null,
    //   "arehavecreativetalent": null,
    //   "awardedDate": null,
    //   "briefDuties": null,
    //   "coOrdinatingTeam": null,
    //   "contactEmail": null,
    //   "country": null,
    //   "countryOfBirth": null,
    //   "courseCountry": null,
    //   "courseEnddate": null,
    //   "courseId": null,
    //   "courseName": null,
    //   "courseSttartDate": null,
    //   "currentEmployment": null,
    //   "dateAppointed": null,
    //   "dates": null,
    //   "description": null,
    //   "descriptionForMba": null,
    //   "disability": null,
    //   "doUoyRequireVisatoStudtInTheUk": null,
    //   "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": null,
    //   "dob": null,
    //   "email": null,
    //   "emailForMba": null,
    //   "employerName": null,
    //   "employersName": null,
    //   "formFillStatus": null,
    //   "forname": null,
    //   "gender": "MALE",
    //   "graduateWorkExperience": null,
    //   "grossAnnualSalary": null,
    //   "homeAddress": null,
    //   "homeEmail": null,
    //   "homeTeliphoneNo": null,
    //   "homeTeliphoneNo2": null,
    //   "isPersionalStatementFeel": null,
    //   "isresponsibility": null,
    //   "jobTitle": null,
    //   "managementWorkExperience": null,
    //   "matchingUniversityDto": [
    //     {
    //       "universityEmail": null,
    //       "universityId": null,
    //       "universityName": null
    //     }
    //   ],
    //   "meetingFinancial": null,
    //   "multiCulturalAxposure": null,
    //   "natureofEmployersBusiness": null,
    //   "operationaActivities": null,
    //   "pageFillNumber": null,
    //   "passportNumber": null,
    //   "permanentResidenceCountry": null,
    //   "persionalDescription": null,
    //   "pgtJobTitle": null,
    //   "phoneNo": null,
    //   "preferredName": null,
    //   "primarilyAchieves": null,
    //   "processesOrTechnology": null,
    //   "professionalBodyMembership": null,
    //   "professionalQualificationSubject": null,
    //   "qualificationTitle": null,
    //   "referee1Address": null,
    //   "referee1Name": null,
    //   "referee1TelephoneNumber": null,
    //   "referee1Title": null,
    //   "referee2Address": null,
    //   "referee2Name": null,
    //   "referee2TelephoneNumber": null,
    //   "referee2Title": null,
    //   "relevantCriminalConvictions": null,
    //   "representativeId": null,
    //   "representativeName": null,
    //   "requireSpecificTechnical": null,
    //   "researchProposalForPGR": null,
    //   "researchProposalForPGRDescription": null,
    //   "responsibleForManageProject": null,
    //   "responsibleFordeployCreativetalent": null,
    //   "sirName": null,
    //   "solveProblemsAndDeliverResults": null,
    //   "state": null,
    //   "technicalResponsibility": null,
    //   "telephoneNo": null,
    //   "telephoneNumber": null,
    //   "title": null,
    //   "totalWorkExperience": null,
    //   "universityId": null,
    //   "urlCv": null,
    //   "urlDegree": null,
    //   "urlDocuments": null,
    //   "urlEnglishLanguageCertificate": null,
    //   "urlResearchProposal": null,
    //   "urlStatement": null,
    //   "urlTranscript": null,
    //   "urlpersonalStatement": null,
    //   "wishtoApplyForUniversityFunding": null,
    //   "wishtoApplyForUniversityFundingDescription": null,
    //   "wishtoApplyForUniversityscholarship": null,
    //   "wishtoApplyForUniversityscholarshipDescription": null,
    //   "zipcode": null
    // }
    this.service.postApi(`course/form-fill-up-as-a-user`,formDetailsDto,1).subscribe((res:any) => {
      console.log("res-->",res)
    })
  }
}