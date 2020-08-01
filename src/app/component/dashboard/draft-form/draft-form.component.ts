import { Component, OnInit } from '@angular/core';

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
