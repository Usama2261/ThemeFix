import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCommissionerComponent } from './match-commissioner.component';

describe('MatchCommissionerComponent', () => {
  let component: MatchCommissionerComponent;
  let fixture: ComponentFixture<MatchCommissionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchCommissionerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchCommissionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
