import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

declare var $ : any;
@Component({
  selector: 'app-matching-universities',
  templateUrl: './matching-universities.component.html',
  styleUrls: ['./matching-universities.component.css']
})
export class MatchingUniversitiesComponent implements OnInit {

  countryList: any = []
  universityList:any = []
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  countryName:any= ''
  selectall:boolean = false
  constructor(private service: ServicesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.service.getCountryStates()
        .subscribe((data) => {
           this.countryList = data
            this.filteredOptions = this.myControl.valueChanges
              .pipe(
                  startWith(''),
                  map(value => this._filter(value))
              );
        }, (error) => {
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countryList.filter(option => option.country.toLowerCase().includes(filterValue));
  }

  selectCountry(){
    // console.log("-->",this.myControl.value)
  }

  reset(){
    this.countryName = '';
  }

  getUniversity(){
    this.countryName = this.myControl.value
    this.service.getApi(`university/v1.1/web/get-university-by-country-for-most-popular-university?country=${this.countryName}&page=0&pageSize=1000`,2).subscribe((res :any ) => {
      console.log("res--->",res)
      this.selectall = false
      this.universityList = []
      if(res.status == 200 && res.body.data.searchData){
        res.body.data.searchData.forEach(element => {
          this.universityList.push({ 
            selected : false,
            ...element
          })
        });
      }
    })
  }

  selectAll(event){
    this.universityList.forEach(element => {
      element.selected = event.srcElement.checked
    });
  }

  select(event,index){
    this.universityList[index].selected = event.srcElement.checked
  }

  submit(){
    console.log("-->>",this.universityList)
    // [routerLink]="['/dashboard']"
    $('#exampleModalCenter').modal('show')
  }

}
