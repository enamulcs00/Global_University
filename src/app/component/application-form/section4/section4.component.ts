import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  section4Form:FormGroup;
    
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  saveAndQuit(){
    if(this.section4Form.invalid){
        return false
    }
    console.log("value-->",this.section4Form.value)
  }
}
