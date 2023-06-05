import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBehaviorComponent } from './player-behavior.component';

describe('PlayerBehaviorComponent', () => {
  let component: PlayerBehaviorComponent;
  let fixture: ComponentFixture<PlayerBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerBehaviorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
