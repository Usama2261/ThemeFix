import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerViewMatchComponent } from './view.component';

describe('DataManagerViewMatchComponent', () => {
  let component: DataManagerViewMatchComponent;
  let fixture: ComponentFixture<DataManagerViewMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerViewMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataManagerViewMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
