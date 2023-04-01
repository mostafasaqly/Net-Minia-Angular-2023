import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginAuthComponent } from './user-login-auth.component';

describe('UserLoginAuthComponent', () => {
  let component: UserLoginAuthComponent;
  let fixture: ComponentFixture<UserLoginAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
