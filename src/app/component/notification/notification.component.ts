import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
declare var $:any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationList:any = [];
  accountDeatails:any;

  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.getNotification()    
    this.accountDeatails = JSON.parse(localStorage.getItem('myProfile'))
    console.log('------->',this.accountDeatails)
  }
  
  getNotification(){
    this.service.showSpinner()
    this.service.getApi(`course/get-notification?page=0&pageSize=100`,1).subscribe((res:any) => {
      if(res.body.status == 200){
        this.notificationList = res.body.data.notificationList.content
      }
      this.service.hideSpinner()
    })
  }

  deleteNotification(item){
    this.service.showSpinner()
    this.service.getApi(`course/delete-notification-particular?notificationId=${item.notificationId}&representativeId=${this.accountDeatails.representativeDetailsId}`,1).subscribe((res:any) => {
      console.log("res-->>",res)
      if(res.body.status == 206){
        this.getNotification()
      }
      this.service.hideSpinner()
    })
  }

  clearAll(){
    this.service.showSpinner()
    this.service.getApi(`course/delete-notification-list?representativeId=${this.accountDeatails.representativeDetailsId}`,1).subscribe((res:any) => {
      console.log("res-->",res)
      if(res.body.status == 206){
        this.getNotification()
      }
      this.service.hideSpinner()
    })
  }
}
