import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAssistantRefereePerfomanceComponent } from './first-assistant-referee-perfomance.component';

describe('FirstAssistantRefereePerfomanceComponent', () => {
  let component: FirstAssistantRefereePerfomanceComponent;
  let fixture: ComponentFixture<FirstAssistantRefereePerfomanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAssistantRefereePerfomanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAssistantRefereePerfomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
