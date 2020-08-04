import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit {

  submitted :boolean = false;
  section6Form :FormGroup;

  constructor() { }

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
  }

  saveAndQuit() {
    this.submitted = true;
    console.log("value- -->>",this.section6Form.value)
  }

}
