import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-progress',
  templateUrl: './application-progress.component.html',
  styleUrls: ['./application-progress.component.css']
})
export class ApplicationProgressComponent implements OnInit {
  accountDetails: any;
  formId: any;

  constructor(private service:ServicesService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.accountDetails = JSON.parse(localStorage.getItem('myProfile'))
    this.activateRoute.params.subscribe((res:any) => {
      this.formId = res.id
      this.getFormInfo()
    })
  }

  getFormInfo(){
    // this.service.getApi(`course/filter-forms-details?page=0&formFillStatus=COMPLETE&representativeId=${this.accountDetails.representativeDetailsId}&university=8`,1).subscribe((res:any) => {
    // this.service.getApi(`course/filter-forms-details?formId=${this.formId}`,1).subscribe((res:any) => {
    this.service.getApi(`course/filter-forms-details?page=0&formFillStatus=COMPLETE&representativeId=${this.accountDetails.representativeDetailsId}`,1).subscribe((res:any) => {
      console.log("res- -->",res.body.data.list[0].formListStatucDto)
      if(res.body.status == 200){
        let universityList = res.body.data.list[0].formListStatucDto
        universityList.forEach(element => {
            console.log("ele -->",element)
            this.service.getApi(`university/v1.1/web/get-university-particular-data?id=${element.universityId}`,2).subscribe((res :any ) => {
              console.log('univ--->>',res)
              this.getStatusInfo()
            })
        });
      }
    })
  }

  getStatusInfo(){
    this.service.getApi(`course/get-all-form-status?applicationStatus=DECISION_PENDING`,1).subscribe((res:any) => {
      console.log('status--->>',res)
    })
  
  }

}
