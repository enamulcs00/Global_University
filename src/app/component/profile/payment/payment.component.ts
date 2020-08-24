import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  accountData: any;
  paymentForm:FormGroup;
  submitted:boolean = false;

  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.initializeForm()
    window.scroll(0,0)
    this.accountData = JSON.parse(localStorage.getItem('myProfile'))
    this.accountData.imageUrl = this.accountData.imageUrl ? this.accountData.imageUrl : 'assets/images/pick-1.png';
  }

  initializeForm(){
    this.paymentForm = new FormGroup({
      nubmer : new FormControl(null,[Validators.required,Validators.pattern(/^\d{16}$/)]),
      cvv : new FormControl(null,[Validators.required,Validators.pattern(/^\d{3}$/)]),
      date : new FormControl(null,[Validators.required,Validators.pattern(/^\d{2}\/\d{2}$/)]),
      name : new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)])
    })
  }


  proceed(){
    this.submitted = true
    if(this.paymentForm.invalid){
      return false
    }
    let paymentDto = {
      "amount": 100,
      "currency": "USD",
      "customer": this.paymentForm.value.name,
      "cvc": this.paymentForm.value.cvv,
      "email":  this.accountData.email,
      "representativeID": this.accountData.representativeDetailsId,
      "exp_month": this.paymentForm.value.date.split('/')[0],
      "exp_year": this.paymentForm.value.date.split('/')[1],
      "nubmer": this.paymentForm.value.nubmer,
    }
    console.log("payment -->>",paymentDto)
    this.service.postApi(`stripe/payment/payByCard`,paymentDto,1).subscribe((res :any ) => {
      console.log("res")
      $('#exampleModalCenter').modal('show')
    })
  }

}
