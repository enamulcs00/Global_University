import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section13',
  templateUrl: './section13.component.html',
  styleUrls: ['./section13.component.css']
})
export class Section13Component implements OnInit {
  fileData: any;
  section13Form:FormGroup;
  submitted :Boolean = false;

  constructor(private service :ServicesService,private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  initializeForm(){
    this.section13Form = new FormGroup({
      "personalStatement" : new FormControl(null,Validators.required),
      "researchPersonal" : new FormControl(null,Validators.required),
      "cv" : new FormControl(null,Validators.required),
      "transcript" : new FormControl(null,Validators.required),
      "degreeCertificate" : new FormControl(null,Validators.required),
      "englishLanguageCertificate" : new FormControl(null,Validators.required),
      "otherDocument" : new FormControl(null,Validators.required),
      "disclaimer" : new FormControl(null,Validators.required),
    })
    if(localStorage.getItem('section12')){
      let section12Data = JSON.parse(localStorage.getItem('section12'))
      this.section13Form.setValue({
        "personalStatement" : section12Data.personalStatement,
        "researchPersonal" : section12Data.researchPersonal,
        "cv" : section12Data.cv,
        "transcript" : section12Data.transcript,
        "degreeCertificate" : section12Data.degreeCertificate,
        "englishLanguageCertificate" : section12Data.englishLanguageCertificate,
        "otherDocument" : section12Data.otherDocument,
        "disclaimer" : section12Data.disclaimer,
      })
    }
  }


  handleFileInput(event,key) {
    console.log(event)
    if (event.target.files && event.target.files[0]) {
      var type = event.target.files[0].type;
      this.fileData = event.target.files[0];
      this.uploadFile(key)
      // if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
      //   var reader = new FileReader()
      //   reader.onload = (e) => {
      //   }
      // }
    }
  }

  uploadFile(key) {
    var formData = new FormData()
    formData.append('file', this.fileData)
    this.service.postMethodMultipart('account/upload-file', formData).subscribe((res) => {
      this.section13Form.controls[key].setValue(res.data);
      console.log(res.data)
    })
  }

  saveAndQuit(){
    this.submitted = true;
    if(this.section13Form.invalid){
      return false
    }
    console.log("save-->",this.section13Form.value)
  }

  continue(){
    this.submitted = true;
    if(this.section13Form.invalid){
      return false
    }
    localStorage.setItem('section12',JSON.stringify(this.section13Form.value))
    this.router.navigateByUrl('section13')

    // this.router.navigateByUrl('application-form-preview')
  }


}
