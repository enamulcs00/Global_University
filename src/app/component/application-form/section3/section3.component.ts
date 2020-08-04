import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  section3Form:FormGroup
  submitted:boolean = false
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm() {
    this.section3Form = new FormGroup({
      "country" : new FormControl('',Validators.required),
      "state" : new FormControl('',Validators.required),
      "address" : new FormControl('',Validators.required),
      "zipCode" : new FormControl('',Validators.required),
      "telephoneNo" : new FormControl('',Validators.required),
      "contactPhoneNo" : new FormControl('',Validators.required),
      "email" : new FormControl('',Validators.required),
      "checkForHomeAddress" : new FormControl(false,Validators.required),
      "homeAddress" : new FormControl('',Validators.required),
      "homeTelephoneNo" : new FormControl('',Validators.required),
      "homeTelephoneNo1" : new FormControl('',Validators.required),
      "homeEmail" : new FormControl('',Validators.required),
    })
  }

  saveAndQuit(){
    this.submitted = true;
    if(this.section3Form.invalid){
      return false
    }
    console.log("form value -->>",this.section3Form)
  }

}
