import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarpPositionAndMovementComponent } from './farp-position-and-movement.component';

describe('FarpPositionAndMovementComponent', () => {
  let component: FarpPositionAndMovementComponent;
  let fixture: ComponentFixture<FarpPositionAndMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarpPositionAndMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarpPositionAndMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
