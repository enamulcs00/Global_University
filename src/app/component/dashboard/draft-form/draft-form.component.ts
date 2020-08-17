import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draft-form',
  templateUrl: './draft-form.component.html',
  styleUrls: ['./draft-form.component.css']
})
export class DraftFormComponent implements OnInit {

  searchKey : any;
  formId : any;
  fromDate : any;
  toDate : any;
  formsList:any = []

  constructor(private service:ServicesService,private router:Router) { }

  ngOnInit() {
      localStorage.removeItem('formId')
      localStorage.removeItem('section1')
      localStorage.removeItem('section2')
      localStorage.removeItem('section3')
      localStorage.removeItem('section4')
      localStorage.removeItem('section5')
      localStorage.removeItem('section6')
      localStorage.removeItem('section7')
      localStorage.removeItem('section8')
      localStorage.removeItem('section9')
      localStorage.removeItem('section10')
      localStorage.removeItem('section11')
      localStorage.removeItem('section12')
      localStorage.removeItem('section13')
      localStorage.removeItem('section14')
    window.scrollTo(0, 0);
    this.getForms()
  }

  getForms(){
    this.service.showSpinner()
    let url = `course/filter-forms-details?page=0&formFillStatus=INCOMPLETE`
    if(this.searchKey){
      url = url + `&search=${this.searchKey}`
    }
    if(this.fromDate){
      url = url + `&fromDate=${this.convertIntoTimeStamp(this.fromDate)}`
    }
    if(this.toDate){
      url = url + `&toDate=${this.convertIntoTimeStamp(this.toDate)}`
    }
    if(this.formId){
      url = url + `&formId=${this.formId}`
    }
    this.service.getApi(url,1).subscribe((res:any) => {
      console.log("res -->",res)
      this.service.hideSpinner()
      if(res.body.status == 200){
        this.formsList = res.body.data.list
      }
    })
  }

  convertIntoTimeStamp(myDate) {
    myDate = myDate.split("-");
    var newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
    console.log(new Date(newDate).getTime());
    return (new Date(newDate).getTime())
  }

  reset(){
    this.searchKey = undefined
    this.formId = undefined
    this.fromDate = undefined
    this.toDate = undefined
    this.getForms()
  }

  continueForm(id){
    this.service.showSpinner()
    this.service.getApi(`course/get-forms-list?page=0&pagesize=10&formId=${id}`,1).subscribe((res:any) => {
      this.service.hideSpinner()
      if(res.status == 200){
        console.log("res--->>",res.body.data.formdata)
        let formData = res.body.data.formdata
        let section1_Object = {
          "searchCourse":formData.courseName,
          "countryName":formData.courseCountry,
          "startYear":formData.courseSttartDate.split('-')[0],
          "startMonth":formData.courseSttartDate.split('-')[1],
          "yearIntake":"",
          "courseId":formData.courseId,
          "courseStartDate":formData.courseSttartDate
        }
        let section2_Object = {
          "CountryOfBirth" :formData.countryOfBirth,
          "descriptionForCriminalConviction" :formData.criminalDescription,
          "descriptionForDisablity" :formData.description,
          "disability" :formData.disability,
          "requireVisaForUK" :formData.doUoyRequireVisatoStudtInTheUk  ,
          "dateOfBirth" :formData.dob ,
          "email" :formData.email,
          "confirmEmail" :formData.email,
          "ethnicity" :formData.ethenticity,
          "foreName" :formData.forname,
          "gender" :formData.gender,
          "passportNumber" :formData.passportNumber,
          "permanentResidenceCountry" :formData.permanentResidenceCountry,
          "prefferedName" :formData.preferredName,
          "criminalConviction" :formData.relevantCriminalConvictions,
          "surName" :formData.sirName,
          "title" :formData.title,
        }
        let section3_Object = {
          "address"  :formData.address ,
          "email"  :formData.contactEmail ,
          "country"  :formData.country ,
          "homeAddress"  :formData.homeAddress ,
          "homeEmail"  :formData.homeEmail  ,
          "homeTelephoneNo"  :formData.homeTeliphoneNo  ,
          "homeTelephoneNo1"  :formData.homeTeliphoneNo2 ,
          "state"  :formData.state ,
          "telephoneNo"  :formData.telephoneNo  ,
          "contactPhoneNo"  :formData.telephoneNo ,
          "zipCode" :formData.zipcode ,
          "checkForHomeAddress" : false ,          
        }
        let section4_Object = {
          "achieved" : formData.academicQualificationForm.achieved,
          "stateHighestQualification":formData.academicQualificationForm.highestAcademicQualification,
          "qualificationArr" : []
        }
          section4_Object.qualificationArr.push({
            "qualification" : formData.academicQualificationForm.academicQualifications ,
            "country" : formData.academicQualificationForm.countryOfStudy ,
            "endDate" : formData.academicQualificationForm.enddate.split('T')[0] ,
            "institutionName" : formData.academicQualificationForm.instituteName ,
            "resultGrade" : formData.academicQualificationForm.resultType ,
            "startDate" : formData.academicQualificationForm.startDate.split('T')[0] ,
            "subject1" : formData.academicQualificationForm.subject1 ,
            "subject1Grade" : formData.academicQualificationForm.subject1grade1 ,
            "subject2" : formData.academicQualificationForm.subject1grade2 ,
            "subject2Grade" : formData.academicQualificationForm.subject2 ,
          })
        let section5_Object = {
          "resultType": "",
          "englishQualificationDate": "",
          "nativeOfEnglishSpeakingCountry"  : formData.areUNativeOfEnglishSpeakingCountry,
          "professionalQualification"  : formData.doUHaveprofessionalQualification,
          "englishLanguageTestDetails" : formData.ifNoThenAddAboutRecentEnglishLanguage,
          "highestAcedemicQualification" : formData.ifNoThenAddHighestEnglishQualification,
          "nativeEnglishSpeakingCountryName" : formData.ifYesSelectCountryForSpeakingCountry,
          "englishQualificationName" : formData.ifYesThenAddProfessionalQualification,
          "englishQualificationScore1" : formData.indivisualBandScore1,
          "englishQualificationScore2" : formData.indivisualBandScore2,
          "englishQualificationScore3" : formData.indivisualBandScore3,
          "englishQualificationScore4" : formData.indivisualBandScore4,
          "overallResult" : formData.overallResultForEnglishQualification,
          "typeOfEnglishQualification" : formData.typeOfEnglishQualification,          
        }
        let section6_Object = {
          "date" : formData.awardedDate.split('T')[0],
          "proffessionalBody" : formData.professionalBodyMembership,
          "subject" : formData.professionalQualificationSubject,
          "title" : formData.qualificationTitle
        }
        let section7_Object = {
          "refree1Description" : formData.aboutReference1,
          "refree2Description" : formData.aboutReference2,
          "refree1address" : formData.referee1Address,
          "refree1name" : formData.referee1Name,
          "refree1phoneNumber" : formData.referee1TelephoneNumber,
          "refree1title" : formData.referee1Title,
          "refree2address" : formData.referee2Address,
          "refree2name" : formData.referee2Name,
          "refree2phoneNumber" : formData.referee2TelephoneNumber,
          "refree2title" : formData.referee2Title,
          "refree1email" : formData.referee1Email,
          "refree2email" : formData.referee2Email,
        }
        localStorage.setItem('section1',JSON.stringify(section1_Object))
        localStorage.setItem('section2',JSON.stringify(section2_Object))
        localStorage.setItem('section3',JSON.stringify(section3_Object))
        localStorage.setItem('section4',JSON.stringify(section4_Object))
        localStorage.setItem('section5',JSON.stringify(section5_Object))
        localStorage.setItem('section6',JSON.stringify(section6_Object))
        localStorage.setItem('section7',JSON.stringify(section7_Object))
        localStorage.setItem('formId',id)
        this.router.navigateByUrl(formData.pageFillNumber)
      }
    })
  }

}