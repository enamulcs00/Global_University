import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any

@Component({
  selector: 'app-my-subscription-details',
  templateUrl: './my-subscription-details.component.html',
  styleUrls: ['./my-subscription-details.component.css']
})
export class MySubscriptionDetailsComponent implements OnInit {

  accountData:any;
  subscriptionDetails:any;
  responseMessage:any;
  id:any

  constructor(private service:ServicesService,private activateRoute:ActivatedRoute) { }


  ngOnInit() {
    window.scroll(0,0)
    this.accountData = JSON.parse(localStorage.getItem('myProfile'))
    this.accountData.imageUrl = this.accountData.imageUrl ? this.accountData.imageUrl : 'assets/images/pick-1.png';
    this.activateRoute.params.subscribe((res:any) => {
      this.id = res.id;
      this.getSubscriptionList(res.id)
    })
  }

  getSubscriptionList(id){
    this.service.showSpinner()
    this.service.getApi(`university/get-global-subscription-particular-data?id=${id}`,1).subscribe((res:any) => {
      if(res.body.status == 200){
        this.subscriptionDetails = res.body.data.data
        console.log('res-->',this.subscriptionDetails)
      }
      this.service.hideSpinner()
    })
  }

  addToCart(){
    this.service.showSpinner()
    let globalSubscriptionDto = {
      "cost": this.subscriptionDetails.cost,
      "description": this.subscriptionDetails.description,
      "imageUrl": this.subscriptionDetails.imageUrl,
      "noOfUserLicences": this.subscriptionDetails.noOfUserLicences,
      "subscriptionModel": this.subscriptionDetails.subscriptionModel,
      "validity": this.subscriptionDetails.validity,
    }
    this.service.postApi(`university/add-subscription`,globalSubscriptionDto,1).subscribe((res:any) => {
      console.log('res--->',res)
      this.service.hideSpinner()
        this.responseMessage = res.body.message;
      $('#resetPassword').modal('show');
    })
  }
}
