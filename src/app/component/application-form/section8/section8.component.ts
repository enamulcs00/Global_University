import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.css']
})
export class Section8Component implements OnInit {

  uploadState : boolean = false;
  submitted : boolean = false;
  description : any = '';

  constructor(private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if(localStorage.getItem('section8')){
      let section8Data = JSON.parse(localStorage.getItem('section8'))
      this.uploadState = section8Data.uploadState
      this.description = section8Data.description
    }
  }

  saveAndQuit(){
    this.submitted = true;
    if(this.description == '' && !this.uploadState){
      return false
    }
  }

  continue(){
    this.submitted = true
    if(this.description == '' && !this.uploadState){
      return false
    }
    let section9Data = {
      uploadState : this.uploadState,
      description: this.description
    }
    localStorage.setItem('section8',JSON.stringify(section9Data))
    this.router.navigateByUrl('section9')
  }

}
