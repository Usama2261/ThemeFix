import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortRefereeComponent } from './sort.component';

describe('FilterComponent', () => {
  let component: SortRefereeComponent;
  let fixture: ComponentFixture<SortRefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortRefereeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
