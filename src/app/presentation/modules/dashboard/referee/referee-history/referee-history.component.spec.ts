import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeHistoryComponent } from './referee-history.component';

describe('RefereeHistoryComponent', () => {
  let component: RefereeHistoryComponent;
  let fixture: ComponentFixture<RefereeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
