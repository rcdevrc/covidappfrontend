import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrackingComponent } from './viewtracking.component';

describe('ViewtrackingComponent', () => {
  let component: ViewtrackingComponent;
  let fixture: ComponentFixture<ViewtrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
