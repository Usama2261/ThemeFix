import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDirectorMenuComponent } from './league-director-menu.component';

describe('LeagueDirectorMenuComponent', () => {
  let component: LeagueDirectorMenuComponent;
  let fixture: ComponentFixture<LeagueDirectorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueDirectorMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueDirectorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
