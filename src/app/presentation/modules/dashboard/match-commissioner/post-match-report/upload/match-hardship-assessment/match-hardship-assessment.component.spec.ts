import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHardshipAssessmentComponent } from './match-hardship-assessment.component';

describe('MatchHardshipAssessmentComponent', () => {
  let component: MatchHardshipAssessmentComponent;
  let fixture: ComponentFixture<MatchHardshipAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchHardshipAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchHardshipAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
