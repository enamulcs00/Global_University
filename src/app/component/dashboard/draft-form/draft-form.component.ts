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
        let section1Object = {
          "searchCourse":formData.courseName,
          "countryName":formData.courseCountry,
          "startYear":formData.courseSttartDate.split('-')[0],
          "startMonth":formData.courseSttartDate.split('-')[1],
          "yearIntake":"",
          "courseId":formData.courseId,
          "courseStartDate":formData.courseSttartDate
        }
        localStorage.setItem('section1',JSON.stringify(section1Object))
        this.router.navigateByUrl(formData.pageFillNumber)
      }
    })
  }

}