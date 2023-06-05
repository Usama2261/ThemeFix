import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalRemarksComponent } from './additional-remarks.component';

describe('AdditionalRemarksComponent', () => {
  let component: AdditionalRemarksComponent;
  let fixture: ComponentFixture<AdditionalRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
