import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ShoppingCartContainerComponent } from './shopping-cart-container.component';

describe('ShoppingCartContainerComponent', () => {
  let component: ShoppingCartContainerComponent;
  let fixture: ComponentFixture<ShoppingCartContainerComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,TranslateModule.forRoot()],
      declarations: [ ShoppingCartContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
