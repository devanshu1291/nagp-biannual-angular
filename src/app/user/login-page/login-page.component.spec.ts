import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authenticationService: AuthenticationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,ToastrModule.forRoot(),TranslateModule.forRoot(),FormsModule],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    authenticationService= new AuthenticationService();
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should login', () => {
    component.login();
    expect(component.invalidLogin).toBe(true);
  });
  it('Authenticate login', () => {
    component.login();
    authenticationService.authenticate('test@123','password')
    expect(component.invalidLogin).toBe(true);
  });
});
