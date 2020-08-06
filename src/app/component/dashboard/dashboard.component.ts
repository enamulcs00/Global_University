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
    this.service.getApi(`course/filter-forms-details`,1).subscribe((res:any) => {
      console.log("res -->",res)
      if(res.body.status == 200){
        this.submittedFormsList = res.body.data.list
      }
    })
  }

  submit(){
    console.log("searchkey -->>",this.searchKey,"form id -->>",this.formId," from Date -->",this.fromDate,"to date --->>",this.toDate)
  }

  reset(){
    this.searchKey = undefined
    this.formId = undefined
    this.fromDate = undefined
    this.toDate = undefined
  }

}
