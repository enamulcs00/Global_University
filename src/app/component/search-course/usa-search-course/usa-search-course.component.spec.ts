import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaSearchCourseComponent } from './usa-search-course.component';

describe('UsaSearchCourseComponent', () => {
  let component: UsaSearchCourseComponent;
  let fixture: ComponentFixture<UsaSearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaSearchCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaSearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
