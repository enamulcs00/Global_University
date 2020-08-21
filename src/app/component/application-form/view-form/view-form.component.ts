import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  formData :any;
  qualificationArr: any = [];
  constructor(private service:ServicesService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((res:any) => {
      if(res.id){
        this.getFormData(res.id)
      }
    })
  }

  getFormData(id){
    this.service.showSpinner()
    this.service.getApi(`course/get-forms-list?page=0&pagesize=10&formId=${id}`,1).subscribe((res:any) => {
      if(res.body.status == 200){
        console.log("res--->>",res.body.data.formdata)
        this.formData = res.body.data.formdata
      }
      this.service.hideSpinner()
    })
  }

}
