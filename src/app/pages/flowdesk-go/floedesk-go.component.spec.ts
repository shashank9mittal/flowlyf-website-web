import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloedeskGoComponent } from './floedesk-go.component';

describe('FloedeskGoComponent', () => {
  let component: FloedeskGoComponent;
  let fixture: ComponentFixture<FloedeskGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloedeskGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloedeskGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
