import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarpPersonalityComponent } from './farp-personality.component';

describe('FarpPersonalityComponent', () => {
  let component: FarpPersonalityComponent;
  let fixture: ComponentFixture<FarpPersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarpPersonalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarpPersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
