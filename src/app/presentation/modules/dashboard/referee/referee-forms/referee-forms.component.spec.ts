import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeFormsComponent } from './referee-forms.component';

describe('RefereeFormsComponent', () => {
  let component: RefereeFormsComponent;
  let fixture: ComponentFixture<RefereeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
