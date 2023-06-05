import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarpPositionAndMovementComponent } from './sarp-position-and-movement.component';

describe('SarpPositionAndMovementComponent', () => {
  let component: SarpPositionAndMovementComponent;
  let fixture: ComponentFixture<SarpPositionAndMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarpPositionAndMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarpPositionAndMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
