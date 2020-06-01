import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'univ';


  constructor(){}

  openSocialLink(social) {
    if (social == `youtube`)
      window.open(`https://youtube.com`)
    else if (social == `facebook`)
      window.open(`https://www.facebook.com/universitiesglobal`)
    else if (social == `twitter`)
      window.open(`https://twitter.com/UniversitiesG`)
    else if (social == `linkedin`)
      window.open(`https://in.linkedin.com/`)
    else if (social == `instagram`)
      window.open(`https://www.instagram.com/universitiesglobal/`)
  }
}
