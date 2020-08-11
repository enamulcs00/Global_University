import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section10',
  templateUrl: './section10.component.html',
  styleUrls: ['./section10.component.css']
})
export class Section10Component implements OnInit {

  section10Form:FormGroup
  researchForPGR:boolean = false
  submitted :boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
    this.section10Form = new FormGroup({
      researchProposal: new FormControl(null,Validators.required),
      researchProposalDescription: new FormControl('')
    })
    if(localStorage.getItem('section10')){
      let sectionData = JSON.parse(localStorage.getItem('section10'))
      this.section10Form.patchValue({
        researchProposal: sectionData.researchProposal,
        researchProposalDescription: sectionData.researchProposalDescription
      })
    }
  }

  change(event){
    console.log("event->",event.target.value)
    if(event.target.value == "YES"){
      this.researchForPGR = true
    }else{
      this.researchForPGR = false
    }
  }

  saveAndQuit(){
    this.submitted = true
    if(this.section10Form.invalid){
      return false;
    }    
  }

  continue(){
    this.submitted = true
    if(this.section10Form.invalid){
      return false;
    }    
    localStorage.setItem('section10',JSON.stringify(this.section10Form.value))
    this.router.navigateByUrl('section11');
  }
}
