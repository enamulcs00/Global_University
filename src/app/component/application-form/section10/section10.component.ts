import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section10',
  templateUrl: './section10.component.html',
  styleUrls: ['./section10.component.css']
})
export class Section10Component implements OnInit {

  section10Form:FormGroup
  researchForPGR:boolean = false
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  initializeForm(){
    this.section10Form = new FormGroup({
      researchProposal: new FormControl(null,Validators.required),
      researchProposalDescription: new FormControl(null)
    })
  }

  change(event){
    console.log("event->",event.target.value)
    if(event.target.value == "YES"){
      this.researchForPGR = true
    }else{
      this.researchForPGR = false
    }
  }
}
