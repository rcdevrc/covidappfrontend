import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidprogressComponent } from './covidprogress.component';

describe('CovidprogressComponent', () => {
  let component: CovidprogressComponent;
  let fixture: ComponentFixture<CovidprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
