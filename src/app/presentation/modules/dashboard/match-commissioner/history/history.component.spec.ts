import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCommissionerHistoryComponent } from './history.component';

describe('HistoryComponent', () => {
  let component: MatchCommissionerHistoryComponent;
  let fixture: ComponentFixture<MatchCommissionerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchCommissionerHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchCommissionerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
