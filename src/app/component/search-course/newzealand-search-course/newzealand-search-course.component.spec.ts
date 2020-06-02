import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewzealandSearchCourseComponent } from './newzealand-search-course.component';

describe('NewzealandSearchCourseComponent', () => {
  let component: NewzealandSearchCourseComponent;
  let fixture: ComponentFixture<NewzealandSearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewzealandSearchCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewzealandSearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
