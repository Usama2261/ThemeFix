import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineAndControlComponent } from './discipline-and-control.component';

describe('DisciplineAndControlComponent', () => {
  let component: DisciplineAndControlComponent;
  let fixture: ComponentFixture<DisciplineAndControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplineAndControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplineAndControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
