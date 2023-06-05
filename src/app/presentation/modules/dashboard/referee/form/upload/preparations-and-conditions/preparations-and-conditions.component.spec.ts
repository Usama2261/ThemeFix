import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationsAndConditionsComponent } from './preparations-and-conditions.component';

describe('PreparationsAndConditionsComponent', () => {
  let component: PreparationsAndConditionsComponent;
  let fixture: ComponentFixture<PreparationsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationsAndConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparationsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
