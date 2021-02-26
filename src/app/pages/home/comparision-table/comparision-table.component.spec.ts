import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisionTableComponent } from './comparision-table.component';

describe('ComparisionTableComponent', () => {
  let component: ComparisionTableComponent;
  let fixture: ComponentFixture<ComparisionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
