import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any

@Component({
  selector: 'app-application-progress',
  templateUrl: './application-progress.component.html',
  styleUrls: ['./application-progress.component.css']
})
export class ApplicationProgressComponent implements OnInit {
  accountDetails: any;
  formId: any;
  univerityListData :any = []
  formdetails:any
  responseMessage:any

  constructor(private service:ServicesService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.accountDetails = JSON.parse(localStorage.getItem('myProfile'))
    this.activateRoute.params.subscribe((res:any) => {
      this.formId = res.id
      this.getFormInfo()
      this.getFullDetails()
    })
  }

  getFullDetails(){
    this.service.getApi(`course/get-forms-list?page=0&pagesize=10&formId=${this.formId}&userId=${this.accountDetails.userId}`,1).subscribe((res:any) => {
      if(res.body.status == 200){
        this.formdetails = res.body.data.formdata
      }
    })
  }
  

  getFormInfo(){
    this.univerityListData = []
    this.service.getApi(`course/filter-forms-details?page=0&pageSize=10&formId=${this.formId}&representativeId=${this.accountDetails.representativeDetailsId}`,1).subscribe((res:any) => {
      // console.log("res- -->",res.body.data.list[4].formListStatucDto)
      if(res.body.status == 200){
        let universityList = res.body.data.list[0].formListStatucDto
        universityList.forEach((element,index) => {
          this.univerityListData.push({...element,options : [],updatedStatus : {}})
          this.getStatusInfo(element.applicationStatus,index)
        });
        console.log("univerityListData --->>",this.univerityListData)
      }
    })
  }

  getStatusInfo(element,index){
    this.service.getApi(`course/get-all-form-status?applicationStatus=${element}`,1).subscribe((res:any) => {
      // console.log('status--->>',res)
      let arr = []
      if(res.body.status == 200){
        let status = res.body.data.optionForRepresentative.split(',');
        let code = res.body.data.optionForRepCode.split(',');        
        status.forEach((ele,index) => {
          arr.push({
            'view' : this.capitalize(ele),
            "status" : ele,
            'code' : code[index]
          })
        });
      }
      this.univerityListData[index].applicationStatus = this.capitalize(this.univerityListData[index].applicationStatus)
      this.univerityListData[index].options = arr
      console.log('arrr -->',arr)
    })
  
  }

  capitalize(string) {
    string = string.replace('_',' ')
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  changeStatus(opt,i){
    console.log("opt -->",opt)
    console.log("Index -->",i)
    this.univerityListData[i].updatedStatus = opt
  }

  submit(item){
    console.log("item --->>",item)
    let dto = {
      "applicationStatus": item.updatedStatus.status,
      "applicationStatusCode": item.updatedStatus.code,
      "courseId": this.formdetails.courseId,
      "courseName": this.formdetails.courseName,
      "descriptionForUniversity": "",
      "descriptionForUser": "",
      "formId": this.formId,
      "formUserEmail": this.formdetails.email,
      "representativeEmail": this.accountDetails.email,
      "representativeId": 0,
      "representativeName": this.accountDetails.representativeName,
      "studentEmail": "",
      "studentId": 0,
      "studentName": "",
      "universityEmail": "",
      "universityId": item.universityId,
      "universityName": ""
    }
    this.service.postApi(`course/update-application-status`,dto,1).subscribe((res:any) => {
      if(res.status){
        $('#showMessage').modal('show')
        this.responseMessage = res.body.message
        this.getFormInfo()
      }
      console.log("update----->>",res)
    })
  }

}
