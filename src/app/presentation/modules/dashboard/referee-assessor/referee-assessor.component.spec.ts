import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeAssessorComponent } from './referee-assessor.component';

describe('RefereeAssessorComponent', () => {
  let component: RefereeAssessorComponent;
  let fixture: ComponentFixture<RefereeAssessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeAssessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereeAssessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
