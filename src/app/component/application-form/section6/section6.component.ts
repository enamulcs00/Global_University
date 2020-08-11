import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit {

  submitted :boolean = false;
  section6Form :FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm() {
    this.section6Form = new FormGroup({
      title : new FormControl(null,Validators.required),
      subject : new FormControl(null,Validators.required),
      date : new FormControl(null,Validators.required),
      proffessionalBody : new FormControl(null,Validators.required),
    })
    if(localStorage.getItem('section6')){
      let sectionData  = JSON.parse(localStorage.getItem('section6'))
      this.section6Form.setValue({
        title : sectionData.title,
        subject : sectionData.subject,
        date : sectionData.date,
        proffessionalBody : sectionData.proffessionalBody,
      })
    }
  }

  saveAndQuit() {
    this.submitted = true;
    console.log("value- -->>",this.section6Form.value)
  }

  continue(){
    this.submitted = true
    if(this.section6Form.invalid){
      return false
    }
    localStorage.setItem('section6',JSON.stringify(this.section6Form.value))
    this.router.navigateByUrl('section7')
  }

}
