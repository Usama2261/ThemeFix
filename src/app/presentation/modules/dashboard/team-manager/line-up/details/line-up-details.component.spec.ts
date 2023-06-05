import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpDetailsComponent } from './line-up-details.component';

describe('LineUpDetailsComponent', () => {
  let component: LineUpDetailsComponent;
  let fixture: ComponentFixture<LineUpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUpDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
