import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpFormComponent } from './line-up-form.component';

describe('LineUpFormComponent', () => {
  let component: LineUpFormComponent;
  let fixture: ComponentFixture<LineUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
