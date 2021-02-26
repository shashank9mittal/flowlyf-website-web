import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCallThankyouComponent } from './schedule-call-thankyou.component';

describe('ScheduleCallThankyouComponent', () => {
  let component: ScheduleCallThankyouComponent;
  let fixture: ComponentFixture<ScheduleCallThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCallThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCallThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
