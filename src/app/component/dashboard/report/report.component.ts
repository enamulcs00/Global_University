import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  countryList:any = []

  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res:any) => {
      console.log("res-->",res)
      this.countryList = res
    })
  }

}
