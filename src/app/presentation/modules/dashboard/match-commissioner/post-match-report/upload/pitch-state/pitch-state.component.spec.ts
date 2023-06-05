import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchStateComponent } from './pitch-state.component';

describe('PitchStateComponent', () => {
  let component: PitchStateComponent;
  let fixture: ComponentFixture<PitchStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitchStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitchStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
