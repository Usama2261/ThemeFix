import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarpMatchControlComponent } from './sarp-match-control.component';

describe('SarpMatchControlComponent', () => {
  let component: SarpMatchControlComponent;
  let fixture: ComponentFixture<SarpMatchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarpMatchControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarpMatchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
