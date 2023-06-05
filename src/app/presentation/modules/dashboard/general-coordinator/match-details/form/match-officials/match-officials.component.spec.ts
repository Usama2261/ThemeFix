import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOfficialsComponent } from './match-officials.component';

describe('MatchOfficialsComponent', () => {
  let component: MatchOfficialsComponent;
  let fixture: ComponentFixture<MatchOfficialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchOfficialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchOfficialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
