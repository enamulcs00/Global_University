import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.css']
})
export class Section8Component implements OnInit {

  uploadState : boolean = false;
  submitted : boolean = false;
  description : any = '';

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  saveAndQuit(){
    this.submitted = true;
  }

}
