import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantOfficialsComponent } from './assistant-officials.component';

describe('AssistantOfficialsComponent', () => {
  let component: AssistantOfficialsComponent;
  let fixture: ComponentFixture<AssistantOfficialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantOfficialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantOfficialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
