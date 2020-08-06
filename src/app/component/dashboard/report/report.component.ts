import { Component, OnInit, NgZone } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  countryList: any = [];
  reportsCountData: any
  fromDate: any;
  toDate: any;
  private chart: am4charts.XYChart;
  chartData :any =  [{
    "country": "USA",
    "visits": 2025
  }, {
    "country": "China",
    "visits": 1882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "UK",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 1114
  }, {
    "country": "India",
    "visits": 984
  }, {
    "country": "Spain",
    "visits": 711
  }, {
    "country": "Netherlands",
    "visits": 665
  }, {
    "country": "Russia",
    "visits": 580
  }, {
    "country": "South Korea",
    "visits": 443
  }, {
    "country": "Canada",
    "visits": 441
  }, {
    "country": "Brazil",
    "visits": 395
  }];

  constructor(private service: ServicesService, private zone: NgZone) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      var chart = am4core.create("chartdiv", am4charts.XYChart);

      // Add data
      chart.data = this.chartData

      // Create axes

      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
        let a: any = 2
        if (target.dataItem && target.dataItem.index) {
          return dy + 25;
        }
        return dy;
      });

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.name = "Visits";
      series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series.columns.template.fillOpacity = .8;

      var columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = 2;
      columnTemplate.strokeOpacity = 1;
    }); //
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngOnInit() {
    this.service.getCountryStates().subscribe((res: any) => {
      console.log("res-->", res)
      this.countryList = res
    })

    this.reportCountApi()
  }

  reportCountApi() {
    this.service.getApi('course/get-form-count', 2).subscribe((res: any) => {
      console.log("res--->", res)
      if (res.status == 200) {
        this.reportsCountData = res.data
      }
    })
  }

  searchReportChart() {
    if (!this.fromDate && !this.toDate) {
      return false
    }
    console.log("from date -->", this.convertIntoTimeStamp(this.fromDate))
    console.log("to date -->", this.convertIntoTimeStamp(this.toDate))
    this.service.getApi(`course/get-graph-data-for-application-status?fromDate=1596637995&toDate=1596637995`, 1).subscribe((res: any) => {
      console.log("res-->>", res)
    })
  }

  convertIntoTimeStamp(myDate) {
    myDate = myDate.split("-");
    var newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
    console.log(new Date(newDate).getTime());
    return (new Date(newDate).getTime())
  }

}
