import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormControlName } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  section4Form: FormGroup;
  qualificationArr: FormArray;
  countryList: any = []
  submitted: boolean = false


  constructor(private fb: FormBuilder, private service: ServicesService, private router: Router) {
    this.section4Form = this.fb.group({
      stateHighestQualification: new FormControl(null, Validators.required),
      achieved: new FormControl(null, Validators.required),
      qualificationArr: this.fb.array([])
    });

    if (localStorage.getItem('section4')) {
      console.log("--->", localStorage.getItem('section4'))
      let section4Data = JSON.parse(localStorage.getItem('section4'))
      this.section4Form.patchValue({
        stateHighestQualification: section4Data.stateHighestQualification,
        achieved: section4Data.achieved,
      })
      this.qualificationArr = this.section4Form.get('qualificationArr') as FormArray;
      section4Data.qualificationArr.forEach(element => {
        this.qualificationArr.push(this.createCall(element.country, element.qualification, element.resultGrade, element.subject1, element.subject1Grade, element.subject2, element.subject2Grade, element.institutionName, element.startDate, element.endDate))
      });
    } else {
      this.addQualification()
    }
  }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    window.scrollTo(0, 0);
  }

  createCall(country, qualification, resultGrade, subject1, subject1Grade, subject2, subject2Grade, institutionName, startDate, endDate): FormGroup {
    return this.fb.group({
      country: new FormControl(country, Validators.required),
      qualification: new FormControl(qualification, Validators.required),
      resultGrade: new FormControl(resultGrade, Validators.required),
      subject1: new FormControl(subject1, Validators.required),
      subject1Grade: new FormControl(subject1Grade, Validators.required),
      subject2: new FormControl(subject2, Validators.required),
      subject2Grade: new FormControl(subject2Grade, Validators.required),
      institutionName: new FormControl(institutionName, Validators.required),
      startDate: new FormControl(startDate, Validators.required),
      endDate: new FormControl(endDate, Validators.required),
    });
  }

  addQualification(): void {
    this.qualificationArr = this.section4Form.get('qualificationArr') as FormArray;
    this.qualificationArr.push(this.createCall("", "", null, null, null, null, null, null, null, null));
    console.log("form data-->", this.qualificationArr.value)
  }

  remove(index){
    this.qualificationArr.removeAt(index);
  }

  cancel() {
    this.section4Form = this.fb.group({
      qualificationArr: this.fb.array([])
    });
    this.addQualification()
  }

  saveAndQuit() {
    this.submitted = true
    console.log("value-->", this.section4Form.value)
  }

  continue() {
    this.submitted = true;
    if (this.section4Form.invalid) {
      return false
    }
    localStorage.setItem('section4', JSON.stringify(this.section4Form.value))
    this.router.navigateByUrl('section5');
  }

}
