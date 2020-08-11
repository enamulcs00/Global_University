import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component implements OnInit {

  section7Form : FormGroup;
  submitted :boolean = false
  TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom,CountryISO.India];
  SearchCountryField = SearchCountryField;
  validPhoneNo1:Boolean = true
  validPhoneNo2:Boolean = true
  constructor(private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm() {
    this.section7Form = new FormGroup({
      refree1name: new FormControl(null,Validators.required),
      refree1title: new FormControl(null,Validators.required),
      refree1address: new FormControl(null,Validators.required),
      refree1phoneNumber : new FormControl(null,Validators.required),
      refree1email : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
      refree1Description : new FormControl(null,Validators.required),
      refree2name: new FormControl(null,Validators.required),
      refree2title: new FormControl(null,Validators.required),
      refree2address: new FormControl(null,Validators.required),
      refree2phoneNumber : new FormControl(null,Validators.required),
      refree2email : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i)]),
      refree2Description : new FormControl(null,Validators.required),
    })
    if(localStorage.getItem('section7')){
      let section7Data = JSON.parse(localStorage.getItem('section7'));
      this.section7Form.setValue({
        refree1name: section7Data.refree1name,
        refree1title: section7Data.refree1title,
        refree1address: section7Data.refree1address,
        refree1phoneNumber : section7Data.refree1phoneNumber,
        refree1email : section7Data.refree1email,
        refree1Description : section7Data.refree1Description,
        refree2name: section7Data.refree2name,
        refree2title: section7Data.refree2title,
        refree2address: section7Data.refree2address,
        refree2phoneNumber : section7Data.refree2phoneNumber,
        refree2email : section7Data.refree2email,
        refree2Description : section7Data.refree2Description,
      })
    }
  }

  phoneValidOrNot1(){
    let key = this.section7Form.controls['refree1phoneNumber'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validPhoneNo1 = key['validatePhoneNumber'].valid
      }else{
        this.validPhoneNo1 = true
      }
    }else{
      this.validPhoneNo1 = true
    }
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  phoneValidOrNot2(){
    let key = this.section7Form.controls['refree2phoneNumber'].errors
    if(key){
      if(key['validatePhoneNumber']){
        this.validPhoneNo2 = key['validatePhoneNumber'].valid
      }else{
        this.validPhoneNo2 = true
      }
    }else{
      this.validPhoneNo2 = true
    }
  }



  saveAndQuit(){
    this.submitted = true;
    if(this.section7Form.invalid){
      return false
    }
    console.log("save -->",this.section7Form.value)
  }


  continue(){
    this.submitted = true;
    if(this.section7Form.invalid){
      return false
    }
    localStorage.setItem('section7',JSON.stringify(this.section7Form.value))
    this.router.navigateByUrl('section8')
  }

}
