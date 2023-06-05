import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationForRefereeComponent } from './evaluation-for-referee.component';

describe('EvaluationForRefereeComponent', () => {
  let component: EvaluationForRefereeComponent;
  let fixture: ComponentFixture<EvaluationForRefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationForRefereeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationForRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
