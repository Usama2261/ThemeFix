import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchGoalsComponent } from './match-goals.component';

describe('MatchGoalsComponent', () => {
  let component: MatchGoalsComponent;
  let fixture: ComponentFixture<MatchGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
