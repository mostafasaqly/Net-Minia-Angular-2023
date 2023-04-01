import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupReactiveComponent } from './user-signup-reactive.component';

describe('UserSignupReactiveComponent', () => {
  let component: UserSignupReactiveComponent;
  let fixture: ComponentFixture<UserSignupReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignupReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignupReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
