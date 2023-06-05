import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationsComponent } from './cooperations.component';

describe('CooperationsComponent', () => {
  let component: CooperationsComponent;
  let fixture: ComponentFixture<CooperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
