import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  section1Form:FormGroup;
  submitted:boolean = false;
  countryList:any = [];

  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    this.initializeForm()
    window.scrollTo(0, 0);
  }

  initializeForm(){
      this.section1Form = new FormGroup({
        "title" : new FormControl('',[Validators.required]),
        "surName" : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
        "foreName" : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
        "prefferedName" : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
        "gender" : new FormControl('',[Validators.required]),
        "email" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
        "confirmEmail" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
        "permanentResidenceCountry" : new FormControl('',[Validators.required]),
        "dateOfBirth" : new FormControl('',[Validators.required]),
        "CountryOfBirth" : new FormControl('',[Validators.required]),
        "passportNumber" : new FormControl('',[Validators.required]),
        "requireVisaForUK" : new FormControl('',[Validators.required]),
        "ethnicity" : new FormControl('',[Validators.required]),
        "disability" : new FormControl('',[Validators.required]),
        "descriptionForDisablity" : new FormControl('',),
        "criminalConviction" : new FormControl('',[Validators.required]),
        "descriptionForCriminalConviction" : new FormControl('',),
      })
  }

  get f() { return this.section1Form.controls; }

  saveAndQuit(){
    this.submitted = true
    if (this.section1Form.invalid) {
      return;
    }
    console.log("value--->",this.section1Form.value)
  }

}
