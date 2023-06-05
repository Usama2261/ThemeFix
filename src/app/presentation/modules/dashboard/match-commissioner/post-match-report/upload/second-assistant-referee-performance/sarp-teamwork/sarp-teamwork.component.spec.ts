import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarpTeamworkComponent } from './sarp-teamwork.component';

describe('SarpTeamworkComponent', () => {
  let component: SarpTeamworkComponent;
  let fixture: ComponentFixture<SarpTeamworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarpTeamworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarpTeamworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
