import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchKey : any;
  formId : any;
  fromDate : any;
  toDate : any;
  submittedFormsList : any = [];

  constructor(private service:ServicesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getSubmiitedForms()
  }

  getSubmiitedForms(){
    this.service.showSpinner()
    let url = `course/filter-forms-details?page=0&formFillStatus=COMPLETE`
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
      if(res.body.status == 200){
        this.submittedFormsList = res.body.data.list
        this.service.hideSpinner()
      }
    })
  }

  reset(){
    this.searchKey = undefined
    this.formId = undefined
    this.fromDate = undefined
    this.toDate = undefined
    this.getSubmiitedForms()
  }

  convertIntoTimeStamp(myDate) {
    myDate = myDate.split("-");
    var newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
    console.log(new Date(newDate).getTime());
    return (new Date(newDate).getTime())
  }
}
