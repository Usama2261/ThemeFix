import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarpAccuracyOfSignalsComponent } from './farp-accuracy-of-signals.component';

describe('FarpAccuracyOfSignalsComponent', () => {
  let component: FarpAccuracyOfSignalsComponent;
  let fixture: ComponentFixture<FarpAccuracyOfSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarpAccuracyOfSignalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarpAccuracyOfSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
