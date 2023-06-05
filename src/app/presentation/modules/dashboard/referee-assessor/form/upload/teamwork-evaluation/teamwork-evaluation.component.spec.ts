import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamworkEvaluationComponent } from './teamwork-evaluation.component';

describe('TeamworkEvaluationComponent', () => {
  let component: TeamworkEvaluationComponent;
  let fixture: ComponentFixture<TeamworkEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamworkEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamworkEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
