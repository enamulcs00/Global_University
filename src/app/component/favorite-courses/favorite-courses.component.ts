import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-favorite-courses',
  templateUrl: './favorite-courses.component.html',
  styleUrls: ['./favorite-courses.component.css']
})
export class FavoriteCoursesComponent implements OnInit {

  favoriteList:any = []
  allCoursefavoriteList:any = []
  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.getFavouriteList()
  }

  getFavouriteList(){
    this.service.showSpinner()
    this.service.getApi(`course/v1.1/web/get-all-favourate-course-for-particular-user?page=0&pagesize=10`,1).subscribe((res:any) => {
      console.log('res-->',res)      
      if(res.body.status == 200){
        res.body.data.FavourateCourses.content.forEach(ele => {
          this.getCourseDetails(ele)
        });
      }
      this.service.hideSpinner()
    })
  }

  getCourseDetails(id){
    this.service.showSpinner()
    this.service.getApi(`course/v1.1/web/view-specific-course?id=${id.courseFavourateId}`,1).subscribe((res : any) => {
      if(res.body.status == 200){
        this.favoriteList.push(Object.assign(id, res.body.data.course))
        this.allCoursefavoriteList.push(Object.assign(id, res.body.data.course))
        console.log("course list -->>",this.favoriteList)
      }
      this.service.hideSpinner()
    })
  }

  removeCourse(id){
    console.log('id-->',id)
    // http://182.72.203.244:2001/course/v1.1/web/remove-from-course-favourates-list?courseId=1&universityId=1
    this.service.postApi(`course/v1.1/web/remove-from-course-favourates-list?courseId=${id.courseId}&universityId=${id.universityId}`,{},1).subscribe((res:any) => {
      console.log("res-->",res)
    })
  }

  searchCourse(event){
    // console.log('event-->',this.favoriteList.filter(x =>  x.courseName == event.target.value))
    // this.favoriteList = this.allCoursefavoriteList.filter(x =>  x.courseName == event.target.value)
  }

}
