import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  countryList:any = [];
  reportsCountData :any
  fromDate:any;
  toDate:any;

  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res:any) => {
      console.log("res-->",res)
      this.countryList = res
    })

    this.reportCountApi()
  }

  reportCountApi(){
    this.service.getApi('course/get-form-count',2).subscribe((res:any) => {
      console.log("res--->",res)
      if(res.status == 200){
        this.reportsCountData = res.data
      }
    })
  }

  searchReportChart(){
    console.log("from date -->",this.fromDate)
    console.log("to date -->",this.toDate)
    this.service.getApi(`course/get-graph-data-for-application-status`,1).subscribe((res:any) => {
      console.log("res-->>",res)
    })
  }

}
