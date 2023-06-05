import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDirectorComponent } from './league-director.component';

describe('LeagueDirectorComponent', () => {
  let component: LeagueDirectorComponent;
  let fixture: ComponentFixture<LeagueDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
