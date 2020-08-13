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
  MonthList:any = [
    {monthName:'January',month:"01"},
    {monthName:'February',month:"02"},
    {monthName:'March',month:"03"},
    {monthName:'April',month:"04"},
    {monthName:'May',month:"05"},
    {monthName:'June',month:"06"},
    {monthName:'July',month:"07"},
    {monthName:'August',month:"08"},
    {monthName:'September',month:"09"},
    {monthName:'October',month:"10"},
    {monthName:'November',month:"11"},
    {monthName:'December',month:"12"}
  ]
  courseId:any ;
  filteredOptions: Observable<string[]>;
  courseStartDate: string;

  constructor(private service:ServicesService,private router:Router) { }

  ngOnInit() {
    let today = new Date();
    for(let i = -10; i < 10; i++){
      this.yearList.push(today.getFullYear() + i)
    }
    this.initializeForm()
    this.getCourses()
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    window.scrollTo(0, 0);
  }

  getCourses(){
    this.service.showSpinner()
    this.service.getApi('course/v1.1/web/search-and-filter-course-details',2).subscribe((res:any) => {
      console.log('res--->',res.body)
      this.service.hideSpinner()
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
    console.log("-->>",this.courseList.filter(option => option.courseName == this.searchCourse.value))
    let selectedCourse = this.courseList.filter(option => option.courseName == this.searchCourse.value)
    this.courseId = selectedCourse[0].courseId
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
      "yearIntake" : new FormControl('',[]),
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
     this.courseId = section1data.courseId
     this.courseStartDate = section1data.courseStartDate
    }
  }

  saveAndQuit(){
    this.courseStartDate = this.section2Form.value.startYear +'-'+ (this.section2Form.value.startMonth) + '-01T00:00:00.000Z';
    this.submitted = true;
    if(this.section2Form.invalid){
      return false
    }    
    console.log("submit -->>",this.section2Form.value)
    // this.fillForm()
  }

  continue(){
    this.courseStartDate = this.section2Form.value.startYear +'-'+ (this.section2Form.value.startMonth) + '-01T00:00:00.000Z';
    this.submitted = true;
    if(this.section2Form.invalid){
      return false
    }
    let courseObject = {...this.section2Form.value,courseId:this.courseId,courseStartDate:this.courseStartDate}
    localStorage.setItem('section1',JSON.stringify(courseObject))
    this.router.navigateByUrl('section2');
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
      "countryOfBirth": "",
      "courseCountry": this.section2Form.value.countryName,
      "courseEnddate": "",
      "courseId": this.courseId,
      "courseName": this.section2Form.value.searchCourse,
      "courseSttartDate": this.courseStartDate,
      "currentEmployment": "",
      "dateAppointed": "",
      "dates": "",
      "description": "",
      "descriptionForMba": "",
      "disability": true,
      "doUoyRequireVisatoStudtInTheUk": true,
      "doYouCurrentlyHaveFundingForYourChosenProgrammeofStudy": true,
      "dob": "",
      "email": "",
      "emailForMba": "",
      "employerName": "",
      "employersName": "",
      "formFillStatus": "INCOMPLETE",
      "forname": "",
      "gender": "MALE",
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
      "pageFillNumber": "section1",
      "passportNumber": "",
      "permanentResidenceCountry": "",
      "persionalDescription": "",
      "pgtJobTitle": "",
      "phoneNo": 0,
      "preferredName": "",
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
      "relevantCriminalConvictions": true,
      "representativeId": 0,
      "representativeName": "",
      "requireSpecificTechnical": "",
      "researchProposalForPGR": true,
      "researchProposalForPGRDescription": "",
      "responsibleForManageProject": true,
      "responsibleFordeployCreativetalent": true,
      "sirName": "",
      "solveProblemsAndDeliverResults": "",
      "state": "",
      "technicalResponsibility": true,
      "telephoneNo": 0,
      "telephoneNumber": 0,
      "title": "",
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
    this.service.postApi(`course/form-fill-up-as-a-user`,formDetailsDto,1).subscribe((res:any) => {
      console.log("res-->",res)
    })
  }


  convertIntoTimeStamp(myDate) {
    myDate = myDate.split("-");
    var newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
    console.log(new Date(newDate).getTime());
    return (new Date(newDate).getTime())
  }
}