import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWarningsComponent } from './upload-warnings.component';

describe('UploadWarningsComponent', () => {
  let component: UploadWarningsComponent;
  let fixture: ComponentFixture<UploadWarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadWarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
