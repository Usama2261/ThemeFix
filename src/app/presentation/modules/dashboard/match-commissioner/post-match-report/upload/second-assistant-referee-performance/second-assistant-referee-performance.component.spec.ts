import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAssistantRefereePerformanceComponent } from './second-assistant-referee-performance.component';

describe('SecondAssistantRefereePerformanceComponent', () => {
  let component: SecondAssistantRefereePerformanceComponent;
  let fixture: ComponentFixture<SecondAssistantRefereePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondAssistantRefereePerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondAssistantRefereePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
