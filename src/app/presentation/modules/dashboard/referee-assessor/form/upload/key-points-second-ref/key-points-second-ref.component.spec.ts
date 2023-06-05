import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPointsSecondRefComponent } from './key-points-second-ref.component';

describe('KeyPointsSecondRefComponent', () => {
  let component: KeyPointsSecondRefComponent;
  let fixture: ComponentFixture<KeyPointsSecondRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPointsSecondRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyPointsSecondRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
