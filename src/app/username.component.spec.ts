import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsernameComponent } from './username.component';
import { environment } from '../environments/environment';

describe('UsernameComponent', () => {
  let component: UsernameComponent;
  let fixture: ComponentFixture<UsernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameComponent ]
    });
    fixture = TestBed.createComponent(UsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch username from environment', () => {
    expect(component.username).toBe(environment.username);
  });
});
