import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingPlayersComponent } from './starting-players.component';

describe('StartingPlayersComponent', () => {
  let component: StartingPlayersComponent;
  let fixture: ComponentFixture<StartingPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartingPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
