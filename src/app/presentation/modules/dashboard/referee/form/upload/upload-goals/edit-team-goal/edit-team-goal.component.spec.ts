import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamGoalComponent } from './edit-team-goal.component';

describe('EditTeamGoalComponent', () => {
  let component: EditTeamGoalComponent;
  let fixture: ComponentFixture<EditTeamGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeamGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTeamGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
