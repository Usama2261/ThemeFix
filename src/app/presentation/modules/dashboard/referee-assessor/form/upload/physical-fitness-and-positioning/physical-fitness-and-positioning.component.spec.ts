import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalFitnessAndPositioningComponent } from './physical-fitness-and-positioning.component';

describe('PhysicalFitnessAndPositioningComponent', () => {
  let component: PhysicalFitnessAndPositioningComponent;
  let fixture: ComponentFixture<PhysicalFitnessAndPositioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalFitnessAndPositioningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalFitnessAndPositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
