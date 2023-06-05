import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeUpcomingComponent } from './referee-upcoming.component';

describe('RefereeUpcomingComponent', () => {
  let component: RefereeUpcomingComponent;
  let fixture: ComponentFixture<RefereeUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereeUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
