import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowdeskComponent } from './flowdesk.component';

describe('FlowdeskComponent', () => {
  let component: FlowdeskComponent;
  let fixture: ComponentFixture<FlowdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
