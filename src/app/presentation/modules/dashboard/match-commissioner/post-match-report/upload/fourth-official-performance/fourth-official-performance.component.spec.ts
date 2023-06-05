import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthOfficialPerformanceComponent } from './fourth-official-performance.component';

describe('FourthOfficialPerformanceComponent', () => {
  let component: FourthOfficialPerformanceComponent;
  let fixture: ComponentFixture<FourthOfficialPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthOfficialPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthOfficialPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
