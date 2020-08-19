import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  accountData:any;
  countryList:any = []
  stateList:any = []
  createUserForm:FormGroup;
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom,CountryISO.India];
  validHomeTelephoneNo: boolean = true;
  validmobileNumber : boolean = true;
  submitted : boolean = false;
  constructor(private service:ServicesService) { }

  ngOnInit() {
    window.scroll(0,0)
    this.accountData = JSON.parse(localStorage.getItem('myProfile'))
    this.accountData.imageUrl = this.accountData.imageUrl ? this.accountData.imageUrl : 'assets/images/pick-1.png';
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    this.initializeForm()
  }

  initializeForm(){
    this.createUserForm = new FormGroup({
      "firstName" : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
      "lastName" : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
      "telephoneNumber" : new FormControl('',[Validators.required]),
      "mobileNumber" : new FormControl('',[Validators.required]),
      "businessName" :  new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
      "email" : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
      "address1" : new FormControl('',[Validators.required]),
      "address2" : new FormControl('',[Validators.required]),
      "address3" : new FormControl('',[Validators.required]),
      "zipCode" : new FormControl('',[Validators.required]),
      "city" : new FormControl('',[Validators.required]),
      "state" : new FormControl('',[Validators.required]),
      "country" : new FormControl('',[Validators.required]),
    })
  }

  homeTelephoneValidOrNot(){
    let key = this.createUserForm.controls['telephoneNumber'].errors
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

  contactValidOrNot(){
    let key = this.createUserForm.controls['mobileNumber'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validmobileNumber = key['validatePhoneNumber'].valid
      }else{
        this.validmobileNumber = true
      }
    }else{
      this.validmobileNumber = true
    }
  }

  getState(event){
    // this.section3Form.patchValue({
    //   state : ''
    // })
    var States = []
    States = this.countryList.filter((res) => res.country === event.target.value)
    this.stateList = States[0].states;
  }


  createUser(){
    this.submitted = true
    let signupDto = {
      "address": this.createUserForm.value.address1+','+this.createUserForm.value.address2+','+this.createUserForm.value.address3,
      "city": this.createUserForm.value.city,
      "country": this.createUserForm.value.country,
      "customerStatus": "SUBSCRIBE",
      "description": "string",
      "deviceToken": "string",
      "deviceType": "string",
      "dob": "string",
      "email": this.createUserForm.value.email,
      "firstName": this.createUserForm.value.firstName,
      "imageUrl": "https://res.cloudinary.com/dmabxaha1/image/upload/v1597827101/jg8jefidy8t1mvfyhizr.png",
      "lastName":this.createUserForm.value.lastName,
      "password": "demoPassword",
      "phoneNo": this.createUserForm.value.telephoneNumber.e164Number,
      "representativeCode": "string",
      "representativeDetailsId": "string",
      "representativeName": "string",
      "roleStatus": "REPRESENTATIVE_USER",
      "state": this.createUserForm.value.state,
      "subject": "string",
      "universityCode": "string",
      "universityDetailsId": 0,
      "universityName": "string",
      "userType": "STUDENT",
      "webUrl": "http://localhost:4201/reset-password"
    }
    console.log('--->>',this.createUserForm.value)
    this.service.postApi(`account/add-sub-user`,signupDto,1).subscribe((res:any) =>{
      console.log('res--->',res)
    })
  }
}
