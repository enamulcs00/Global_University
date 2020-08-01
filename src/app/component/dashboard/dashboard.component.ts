import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
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
