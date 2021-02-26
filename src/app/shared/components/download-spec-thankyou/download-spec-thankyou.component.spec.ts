import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSpecThankyouComponent } from './download-spec-thankyou.component';

describe('DownloadSpecThankyouComponent', () => {
  let component: DownloadSpecThankyouComponent;
  let fixture: ComponentFixture<DownloadSpecThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSpecThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSpecThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
