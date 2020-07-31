import { Component } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'univ';
  tokenAvailable : any;

  constructor(private router:Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.tokenAvailable = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        }
    })
  }

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

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }
}
