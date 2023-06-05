import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservePlayersComponent } from './reserve-players.component';

describe('ReservePlayersComponent', () => {
  let component: ReservePlayersComponent;
  let fixture: ComponentFixture<ReservePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservePlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
