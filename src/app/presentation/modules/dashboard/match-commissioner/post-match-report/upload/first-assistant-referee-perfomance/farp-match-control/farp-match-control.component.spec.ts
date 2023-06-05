import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarpMatchControlComponent } from './farp-match-control.component';

describe('FarpMatchControlComponent', () => {
  let component: FarpMatchControlComponent;
  let fixture: ComponentFixture<FarpMatchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarpMatchControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarpMatchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
