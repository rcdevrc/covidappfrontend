import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetcardComponent } from './widgetcard.component';

describe('WidgetcardComponent', () => {
  let component: WidgetcardComponent;
  let fixture: ComponentFixture<WidgetcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
