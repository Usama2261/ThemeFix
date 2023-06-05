import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarpTeamworkComponent } from './farp-teamwork.component';

describe('FarpTeamworkComponent', () => {
  let component: FarpTeamworkComponent;
  let fixture: ComponentFixture<FarpTeamworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarpTeamworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarpTeamworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
