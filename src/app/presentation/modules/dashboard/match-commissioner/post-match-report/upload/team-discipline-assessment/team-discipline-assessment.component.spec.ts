import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDisciplineAssessmentComponent } from './team-discipline-assessment.component';

describe('TeamDisciplineAssessmentComponent', () => {
  let component: TeamDisciplineAssessmentComponent;
  let fixture: ComponentFixture<TeamDisciplineAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDisciplineAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDisciplineAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
