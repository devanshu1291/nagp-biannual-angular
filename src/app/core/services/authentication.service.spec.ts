import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should authenticate', () => {
    expect(service.authenticate('test@123', 'password')).toBe(true);
  });
  it('should authenticate false', () => {
    expect(service.authenticate('null', 'null')).toBe(false);
  });
  it('is user logged in ', () => {
    expect(service.isUserLoggedIn()).toBe(true);
  });
});

