import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationList:any = [5,3,4,5,5,5,5,5]
  constructor() { }

  ngOnInit() {
  }

}
