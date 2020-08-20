import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
declare var $:any

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
    $('#exampleModalCenter').modal('show');
    window.scroll(0,0)
    this.accountData = JSON.parse(localStorage.getItem('myProfile'))
    this.accountData.imageUrl = this.accountData.imageUrl ? this.accountData.imageUrl : 'assets/images/pick-1.png';
    this.getUserList()
  }

  getUserList(){
    this.userList = []
    this.service.getApi(`account/filter-user-details?roleStatus=${this.accountData.role}`,1).subscribe((res:any) => {
      this.userList = res.body.data.list
      console.log('res-->>',this.userList)
    })
  }

  deleteUser(id){
    this.service.getApi(`account/delete-user-detail-otherRole?userId=${id}`,1).subscribe((res:any) => {
      console.log("res-->>",res)
      if(res.body.status == 200){
        this.getUserList()
      }
    })
  }

}
