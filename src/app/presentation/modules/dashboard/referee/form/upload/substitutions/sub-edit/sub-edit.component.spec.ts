import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEditComponent } from './sub-edit.component';

describe('SubEditComponent', () => {
  let component: SubEditComponent;
  let fixture: ComponentFixture<SubEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
