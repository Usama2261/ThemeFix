import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbComponent } from './formb.component';

describe('FormbComponent', () => {
  let component: FormbComponent;
  let fixture: ComponentFixture<FormbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
