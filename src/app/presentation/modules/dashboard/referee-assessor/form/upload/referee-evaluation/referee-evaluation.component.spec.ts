import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeEvaluationComponent } from './referee-evaluation.component';

describe('RefereeEvaluationComponent', () => {
  let component: RefereeEvaluationComponent;
  let fixture: ComponentFixture<RefereeEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
