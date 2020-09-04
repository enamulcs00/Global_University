import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-progress',
  templateUrl: './view-progress.component.html',
  styleUrls: ['./view-progress.component.css']
})
export class ViewProgressComponent implements OnInit {
  formId: any;
  universityId: any;
  progressStatus: any = [];

  constructor(private service:ServicesService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((res : any) => {
      if(res.formId && res.universityId){
        this.universityId = res.universityId
        this.formId = res.formId
        this.getProgress()
      }
    })
  }

  getProgress(){
    this.service.showSpinner()
    this.service.getApi(`course/get-application-status-for-progress-view?formId=${this.formId}&representativeId=${JSON.parse(localStorage.getItem('myProfile')).representativeDetailsId}&universityId=${this.universityId}`,1).subscribe((res:any) => {
      if(res.body.status == 200){
        this.progressStatus = res.body.data
        this.progressStatus.forEach((element,index) => {
          this.progressStatus[index].applicationStatus = this.capitalize(element.applicationStatus)
        });
        console.log("res -->",this.progressStatus)
      }
      this.service.hideSpinner()
    })
  }

  capitalize(string) {
    string = string.replace('_',' ')
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

}
