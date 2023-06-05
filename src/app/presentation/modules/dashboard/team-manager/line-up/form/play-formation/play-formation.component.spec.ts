import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFormationComponent } from './play-formation.component';

describe('PlayFormationComponent', () => {
  let component: PlayFormationComponent;
  let fixture: ComponentFixture<PlayFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
