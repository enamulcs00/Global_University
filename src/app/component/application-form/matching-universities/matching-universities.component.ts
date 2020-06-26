import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching-universities',
  templateUrl: './matching-universities.component.html',
  styleUrls: ['./matching-universities.component.css']
})
export class MatchingUniversitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
