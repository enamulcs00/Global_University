import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrelandSearchCourseComponent } from './ireland-search-course.component';

describe('IrelandSearchCourseComponent', () => {
  let component: IrelandSearchCourseComponent;
  let fixture: ComponentFixture<IrelandSearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrelandSearchCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrelandSearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
