import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartListPageComponent } from './shopping-cart-list-page.component';

describe('ShoppingCartListPageComponent', () => {
  let component: ShoppingCartListPageComponent;
  let fixture: ComponentFixture<ShoppingCartListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
