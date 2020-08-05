import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component implements OnInit {

  section7Form : FormGroup;
  submitted :boolean = false
  constructor() { }

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
      refree1Description : new FormControl(null,Validators.required),
      refree2name: new FormControl(null,Validators.required),
      refree2title: new FormControl(null,Validators.required),
      refree2address: new FormControl(null,Validators.required),
      refree2phoneNumber : new FormControl(null,Validators.required),
      refree2Description : new FormControl(null,Validators.required),
    })
  }


  saveAndQuit(){
    this.submitted = true;
    if(this.section7Form.invalid){
      return false
    }
    console.log("sav -->",this.section7Form.value)
  }


}
