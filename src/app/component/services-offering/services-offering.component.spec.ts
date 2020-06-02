import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOfferingComponent } from './services-offering.component';

describe('ServicesOfferingComponent', () => {
  let component: ServicesOfferingComponent;
  let fixture: ComponentFixture<ServicesOfferingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesOfferingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
