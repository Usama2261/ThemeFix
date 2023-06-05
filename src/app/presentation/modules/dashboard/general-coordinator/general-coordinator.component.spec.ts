import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCoordinatorComponent } from './general-coordinator.component';

describe('GeneralCoordinatorComponent', () => {
  let component: GeneralCoordinatorComponent;
  let fixture: ComponentFixture<GeneralCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
