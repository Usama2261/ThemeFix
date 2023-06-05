import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSearchComponent } from './inner-search.component';

describe('InnerSearchComponent', () => {
  let component: InnerSearchComponent;
  let fixture: ComponentFixture<InnerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
