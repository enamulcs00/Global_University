import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormControlName } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  section4Form: FormGroup;
  qualificationArr: FormArray;
  countryList: any = []
  submitted: boolean = false


  constructor(private fb: FormBuilder, private service: ServicesService, private router: Router) {
    this.section4Form = this.fb.group({
      stateHighestQualification: new FormControl(null, Validators.required),
      achieved: new FormControl(null, Validators.required),
      qualificationArr: this.fb.array([])
    });

    if (localStorage.getItem('section4')) {
      console.log("--->", localStorage.getItem('section4'))
      let section4Data = JSON.parse(localStorage.getItem('section4'))
      this.section4Form.patchValue({
        stateHighestQualification: section4Data.stateHighestQualification,
        achieved: section4Data.achieved,
      })
      this.qualificationArr = this.section4Form.get('qualificationArr') as FormArray;
      section4Data.qualificationArr.forEach(element => {
        this.qualificationArr.push(this.createCall(element.country, element.qualification, element.resultGrade, element.subject1, element.subject1Grade, element.subject2, element.subject2Grade, element.institutionName, element.startDate, element.endDate))
      });
    } else {
      this.addQualification()
    }
  }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    window.scrollTo(0, 0);
  }

  createCall(country, qualification, resultGrade, subject1, subject1Grade, subject2, subject2Grade, institutionName, startDate, endDate): FormGroup {
    return this.fb.group({
      country: new FormControl(country, Validators.required),
      qualification: new FormControl(qualification, Validators.required),
      resultGrade: new FormControl(resultGrade, Validators.required),
      subject1: new FormControl(subject1, Validators.required),
      subject1Grade: new FormControl(subject1Grade, Validators.required),
      subject2: new FormControl(subject2, Validators.required),
      subject2Grade: new FormControl(subject2Grade, Validators.required),
      institutionName: new FormControl(institutionName, Validators.required),
      startDate: new FormControl(startDate, Validators.required),
      endDate: new FormControl(endDate, Validators.required),
    });
  }

  addQualification(): void {
    this.qualificationArr = this.section4Form.get('qualificationArr') as FormArray;
    this.qualificationArr.push(this.createCall("", "", null, null, null, null, null, null, null, null));
    console.log("form data-->", this.qualificationArr.value)
  }

  remove(index){
    this.qualificationArr.removeAt(index);
  }

  cancel() {
    this.section4Form = this.fb.group({
      qualificationArr: this.fb.array([])
    });
    this.addQualification()
  }

  saveAndQuit() {
    this.submitted = true
    console.log("value-->", this.section4Form.value)
  }

  continue() {
    this.submitted = true;
    if (this.section4Form.invalid) {
      return false
    }
    localStorage.setItem('section4', JSON.stringify(this.section4Form.value))
    this.router.navigateByUrl('section5');
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