import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkSearchCourseComponent } from './uk-search-course.component';

describe('UkSearchCourseComponent', () => {
  let component: UkSearchCourseComponent;
  let fixture: ComponentFixture<UkSearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkSearchCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkSearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
