import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';
@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  section3Form:FormGroup
  submitted:boolean = false;
  countryList:any = []
  stateList:any = []
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom,CountryISO.India];
  validPhoneNo:Boolean = true
  validContactNo:Boolean = true;
  validHomeTelephoneNo:Boolean = true;
  validHome1TelephoneNo:Boolean = true;
  responseMessage :any = ""

  constructor(private service:ServicesService,private router:Router) { }

  ngOnInit() {
    this.initializeForm()  
    window.scrollTo(0, 0);
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  phoneValidOrNot(){
    let key = this.section3Form.controls['telephoneNo'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validPhoneNo = key['validatePhoneNumber'].valid
      }else{
        this.validPhoneNo = true
      }
    }else{
      this.validPhoneNo = true
    }
  }

  contactValidOrNot(){
    let key = this.section3Form.controls['contactPhoneNo'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validContactNo = key['validatePhoneNumber'].valid
      }else{
        this.validContactNo = true
      }
    }else{
      this.validContactNo = true
    }
  }

  homeTelephoneValidOrNot(){
    let key = this.section3Form.controls['homeTelephoneNo'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validHomeTelephoneNo = key['validatePhoneNumber'].valid
      }else{
        this.validHomeTelephoneNo = true
      }
    }else{
      this.validHomeTelephoneNo = true
    }
  }

  homeTelephone1ValidOrNot(){
    let key = this.section3Form.controls['homeTelephoneNo1'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validHome1TelephoneNo = key['validatePhoneNumber'].valid
      }else{
        this.validHome1TelephoneNo = true
      }
    }else{
      this.validHome1TelephoneNo = true
    }
  }

  initializeForm() {
    this.section3Form = new FormGroup({
      "country" : new FormControl('',Validators.required),
      "state" : new FormControl('',Validators.required),
      "address" : new FormControl('',Validators.required),
      "zipCode" : new FormControl('',Validators.required),
      "telephoneNo" : new FormControl('',Validators.required),
      "contactPhoneNo" : new FormControl('',Validators.required),
      "email" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
      "checkForHomeAddress" : new FormControl(false,Validators.required),
      "homeAddress" : new FormControl('',Validators.required),
      "homeTelephoneNo" : new FormControl('',Validators.required),
      "homeTelephoneNo1" : new FormControl('',Validators.required),
      "homeEmail" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
    })
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
      if(localStorage.getItem('section3')){
        let section3Data = JSON.parse(localStorage.getItem('section3'))
        var States = []
        States = this.countryList.filter((res) => res.country == section3Data.country)
        this.stateList = States[0].states;
        this.section3Form.setValue({
          "country" : section3Data.country ,
          "state" : section3Data.state ,
          "address" : section3Data.address ,
          "zipCode" : section3Data.zipCode ,
          "telephoneNo" : section3Data.telephoneNo ,
          "contactPhoneNo" : section3Data.contactPhoneNo ,
          "email" : section3Data.email ,
          "checkForHomeAddress" : section3Data.checkForHomeAddress ,
          "homeAddress" : section3Data.homeAddress ,
          "homeTelephoneNo" : section3Data.homeTelephoneNo ,
          "homeTelephoneNo1" : section3Data.homeTelephoneNo1 ,
          "homeEmail" : section3Data.homeEmail ,
        })
      }
    })
  }

  getState(event){
    this.section3Form.patchValue({
      state : ''
    })
    var States = []
    States = this.countryList.filter((res) => res.country === event.target.value)
    this.stateList = States[0].states;
  }

  saveAndQuit(){
    this.submitted = true;
    if(this.section3Form.invalid){
      return false
    }
    console.log("form value -->>",this.section3Form.value)
  }

  continue(){
    this.submitted = true;
    if(this.section3Form.invalid){
      return false
    }
    localStorage.setItem('section3',JSON.stringify(this.section3Form.value))
    this.router.navigateByUrl('section4');
  }

}
