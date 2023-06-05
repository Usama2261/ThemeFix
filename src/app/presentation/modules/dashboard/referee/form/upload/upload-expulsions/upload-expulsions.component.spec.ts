import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExpulsionsComponent } from './upload-expulsions.component';

describe('UploadExpulsionsComponent', () => {
  let component: UploadExpulsionsComponent;
  let fixture: ComponentFixture<UploadExpulsionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadExpulsionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadExpulsionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
