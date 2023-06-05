import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGoalsComponent } from './upload-goals.component';

describe('UploadGoalsComponent', () => {
  let component: UploadGoalsComponent;
  let fixture: ComponentFixture<UploadGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
