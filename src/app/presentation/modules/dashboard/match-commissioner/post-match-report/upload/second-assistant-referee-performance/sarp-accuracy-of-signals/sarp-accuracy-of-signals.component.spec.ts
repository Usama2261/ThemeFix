import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarpAccuracyOfSignalsComponent } from './sarp-accuracy-of-signals.component';

describe('SarpAccuracyOfSignalsComponent', () => {
  let component: SarpAccuracyOfSignalsComponent;
  let fixture: ComponentFixture<SarpAccuracyOfSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarpAccuracyOfSignalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarpAccuracyOfSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
