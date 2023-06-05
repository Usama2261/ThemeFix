import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMatchReportComponent } from './pre-match-report.component';

describe('PreMatchReportComponent', () => {
  let component: PreMatchReportComponent;
  let fixture: ComponentFixture<PreMatchReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreMatchReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreMatchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
