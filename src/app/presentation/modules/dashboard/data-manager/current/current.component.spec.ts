import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerCurrentComponent } from './current.component';

describe('DataManagerCurrentComponent', () => {
  let component: DataManagerCurrentComponent;
  let fixture: ComponentFixture<DataManagerCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataManagerCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
