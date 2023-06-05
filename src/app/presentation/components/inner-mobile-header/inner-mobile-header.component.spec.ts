import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerMobileHeaderComponent } from './inner-mobile-header.component';

describe('InnerMobileHeaderComponent', () => {
  let component: InnerMobileHeaderComponent;
  let fixture: ComponentFixture<InnerMobileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerMobileHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerMobileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
