import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  token: any;
  remembers: boolean = false;
  type: any = 'password';
  show: boolean = false;
  constructor(private service: ServicesService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    if (!localStorage.getItem('ok')) {
      //  this.router.navigate(['dashboard'])
    }
    this.loginForm = this.fb.group({
      "email": ["", Validators.compose([Validators.required, Validators.maxLength(60), Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)])],
      "password": ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      "remember": [true,]
    })
    if (JSON.parse(localStorage.getItem('remembers')) == true) {
      this.loginForm.patchValue({
        "email": window.atob(localStorage.getItem('email')),
        "password": window.atob(localStorage.getItem('password'))
      })
    } else {
      localStorage.clear();
      this.loginForm.reset();
    }


  }
  // ******************Login Api*******************//

  login() {

    if (localStorage != null) {
      localStorage.setItem('email', window.btoa(this.loginForm.value.email))
      localStorage.setItem('password', window.btoa(this.loginForm.value.password))
    } else {
      this.loginForm.reset();
    }
    localStorage.setItem('remembers', JSON.stringify(this.loginForm.value.remember))
    let object = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    console.log('object', object)
    this.service.postApi('auth', object, 2).subscribe((res: any) => {
      // console.log("my login data", res)
      if (res.status == 200) {
        console.log("resssss===>>", res.body.data.token)
        localStorage.setItem('oka', 'ok')
        this.token = res.body.data.token
        console.log("token===>>", res.body.data.token)
        localStorage.setItem('token', this.token)
        // this.service.showSuccess("Login has been successfully")
        // this.router.navigate(['universities-management'])

        this.router.navigate(['dashboard'])
        //  this.spinner.hide()



      } else {
        //  this.spinner.hide()
        // this.service.toastErr(res.status)
      }
    }, error => {
      //  this.spinner.hide()
      // this.service.toastErr('Internal server error')
    })
    // this.router.navigate(['universities-management']) 
  }

  // toggleShow(evt){
  //   console.log(evt)
  //   console.log(JSON.stringify(evt))
  //   if(JSON.stringify(evt) =="password"){
  //     this.type = 'text'
  //     this.show = true
  //   }else{
  //     this.type = 'password';
  //     this.show = false
  //   }
  // }

  toggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }

  openLink(link) {
    if (link == `home`)
      window.open(`http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1619/dashboard`)
    else if (link == `contact-us`)
      window.open(``)
  }

}