import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  accountData: any;
  userList :any

  constructor(private service:ServicesService) { }

  ngOnInit() {
    window.scroll(0,0)
    this.accountData = JSON.parse(localStorage.getItem('myProfile'))
    this.accountData.imageUrl = this.accountData.imageUrl ? this.accountData.imageUrl : 'assets/images/pick-1.png';
    this.getUserList()
  }

  getUserList(){
    this.userList = []
    this.service.getApi(`account/admin/user-management/filter-user-details`,1).subscribe((res:any) => {
      console.log('res-->>',res)
      this.userList = res.body.data.list
    })
  }

}
