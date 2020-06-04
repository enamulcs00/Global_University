import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaSearchCourseComponent } from './australia-search-course.component';

describe('AustraliaSearchCourseComponent', () => {
  let component: AustraliaSearchCourseComponent;
  let fixture: ComponentFixture<AustraliaSearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliaSearchCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaSearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
