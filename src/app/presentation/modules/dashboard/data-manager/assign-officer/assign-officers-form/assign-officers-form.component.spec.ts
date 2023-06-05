import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignOfficersFormComponent } from './assign-officers-form.component';

describe('AssignOfficersFormComponent', () => {
  let component: AssignOfficersFormComponent;
  let fixture: ComponentFixture<AssignOfficersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignOfficersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignOfficersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
