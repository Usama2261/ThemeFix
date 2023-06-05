import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarpPersonalityComponent } from './sarp-personality.component';

describe('SarpPersonalityComponent', () => {
  let component: SarpPersonalityComponent;
  let fixture: ComponentFixture<SarpPersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarpPersonalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarpPersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
