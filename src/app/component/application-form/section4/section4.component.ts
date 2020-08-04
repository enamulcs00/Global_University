import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  section4Form:FormGroup;
  qualificationArr: FormArray;


  constructor( private fb: FormBuilder) { 
    this.section4Form = this.fb.group({
      stateHighestQualification : new FormControl(),
      achieved : new FormControl(),
      qualificationArr : this.fb.array([])
    });
    this.qualificationArr = this.section4Form.get('qualificationArr') as FormArray;
    this.qualificationArr.push(this.createCall(null,null,null,null,null,null,null,null,null,null));
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  saveAndQuit(){
    // if(this.section4Form.invalid){
    //     return false
    // }
    console.log("value-->",this.section4Form.value)
  }

  createCall(country,qualification,resultGrade,subject1,subject1Grade,subject2,subject2Grade,institutionName,startDate,endDate): FormGroup {
    return this.fb.group({
      country  : new FormControl(country),
      qualification : new FormControl(qualification),
      resultGrade : new FormControl(resultGrade),
      subject1 : new FormControl(subject1),
      subject1Grade : new FormControl(subject1Grade),
      subject2 : new FormControl(subject2),
      subject2Grade : new FormControl(subject2Grade),
      institutionName : new FormControl(institutionName),
      startDate : new FormControl(startDate),
      endDate : new FormControl(endDate),
    });
  }

  addQualification() : void {
    this.qualificationArr = this.section4Form.get('qualificationArr') as FormArray;
    this.qualificationArr.push(this.createCall(null,null,null,null,null,null,null,null,null,null));
    console.log("form data-->",this.qualificationArr.value)
  }

  cancel() {
    this.section4Form = this.fb.group({
      qualificationArr: this.fb.array([])
    });
    this.addQualification()
  }
}
