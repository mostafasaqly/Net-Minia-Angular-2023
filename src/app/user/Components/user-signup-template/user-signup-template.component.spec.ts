import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupTemplateComponent } from './user-signup-template.component';

describe('UserSignupTemplateComponent', () => {
  let component: UserSignupTemplateComponent;
  let fixture: ComponentFixture<UserSignupTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignupTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignupTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
