import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-history',
  templateUrl: './subscription-history.component.html',
  styleUrls: ['./subscription-history.component.css']
})
export class SubscriptionHistoryComponent implements OnInit {
  accountData: any;

  constructor() { }

  ngOnInit() {
      window.scroll(0,0)
      this.accountData = JSON.parse(localStorage.getItem('myProfile'))
      this.accountData.imageUrl = this.accountData.imageUrl ? this.accountData.imageUrl : 'assets/images/pick-1.png';
  }

}
