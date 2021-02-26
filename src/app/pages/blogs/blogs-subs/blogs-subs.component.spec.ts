import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsSubsComponent } from './blogs-subs.component';

describe('BlogsSubsComponent', () => {
  let component: BlogsSubsComponent;
  let fixture: ComponentFixture<BlogsSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
