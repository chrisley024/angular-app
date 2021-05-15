import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerHttpComponent } from './follower-http.component';

describe('FollowerHttpComponent', () => {
  let component: FollowerHttpComponent;
  let fixture: ComponentFixture<FollowerHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
