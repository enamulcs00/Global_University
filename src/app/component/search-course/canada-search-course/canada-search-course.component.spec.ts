import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadaSearchCourseComponent } from './canada-search-course.component';

describe('CanadaSearchCourseComponent', () => {
  let component: CanadaSearchCourseComponent;
  let fixture: ComponentFixture<CanadaSearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaSearchCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaSearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
