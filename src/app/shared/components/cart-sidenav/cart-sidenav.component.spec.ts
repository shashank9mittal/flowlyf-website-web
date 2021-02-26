import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSidenavComponent } from './cart-sidenav.component';

describe('CartSidenavComponent', () => {
  let component: CartSidenavComponent;
  let fixture: ComponentFixture<CartSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
