import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSpecComponent } from './download-spec.component';

describe('DownloadSpecComponent', () => {
  let component: DownloadSpecComponent;
  let fixture: ComponentFixture<DownloadSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
