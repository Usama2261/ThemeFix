import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamGoalComponent } from './create-team-goal.component';

describe('CreateTeamGoalComponent', () => {
  let component: CreateTeamGoalComponent;
  let fixture: ComponentFixture<CreateTeamGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTeamGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTeamGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
