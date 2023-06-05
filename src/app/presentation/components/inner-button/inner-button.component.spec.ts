import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerButtonComponent } from './inner-button.component';

describe('InnerButtonComponent', () => {
  let component: InnerButtonComponent;
  let fixture: ComponentFixture<InnerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
