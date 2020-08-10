import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  section2Form:FormGroup;
  searchCourse = new FormControl();
  submitted:boolean = false;
  countryList:any = [];
  courseList:any = [];
  yearList:any = [];
  MonthList:any = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  filteredOptions: Observable<string[]>;

  constructor(private service:ServicesService,private router:Router) { }

  ngOnInit() {
    let today = new Date();
    for(let i = -10; i < 10; i++){
      this.yearList.push(today.getFullYear() + i)
    }
    this.getCourses()
    this.service.getCountryStates().subscribe((res: any) => {
      this.countryList = res
    })
    window.scrollTo(0, 0);
    this.initializeForm()
  }

  getCourses(){
    this.service.getApi('course/v1.1/web/search-and-filter-course-details',2).subscribe((res:any) => {
      console.log('res--->',res.body)
      if(res.body.status == 200){
        this.courseList = res.body.data.list;
        this.filteredOptions = this.searchCourse.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      }
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.courseList.filter(option => option.courseName.toLowerCase().includes(filterValue));
  }

  selectCourse(){
    console.log("-->",this.searchCourse.value)
    this.section2Form.patchValue({
      searchCourse : this.searchCourse.value
    })
  }

  initializeForm() {
    this.section2Form = new FormGroup({
      "searchCourse" : new FormControl('',[Validators.required]),
      "countryName" : new FormControl('',[Validators.required]),
      "startYear" : new FormControl('',[Validators.required]),
      "startMonth" : new FormControl('',[Validators.required]),
      "yearIntake" : new FormControl('',[Validators.required]),
    })
    if(localStorage.getItem('section1')){
     let section1data = JSON.parse(localStorage.getItem('section1'))
     this.searchCourse = new FormControl(section1data.searchCourse)
     this.section2Form.setValue({
       "searchCourse" : section1data.searchCourse,
       "countryName" : section1data.countryName,
       "startYear" : section1data.startYear,
       "startMonth" : section1data.startMonth,
       "yearIntake" : section1data.yearIntake,
     })
    }
  }

  saveAndQuit(){
    this.submitted = true;
    if(this.section2Form.invalid){
      return false
    }
    console.log("submit -->>",this.section2Form.value)
  }

  continue(){
    this.submitted = true;
    if(this.section2Form.invalid){
      return false
    }
    localStorage.setItem('section1',JSON.stringify(this.section2Form.value))
    this.router.navigateByUrl('section2');
  }

}
