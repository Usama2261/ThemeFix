import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsConductionComponent } from './sports-conduction.component';

describe('SportsConductionComponent', () => {
  let component: SportsConductionComponent;
  let fixture: ComponentFixture<SportsConductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsConductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsConductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
