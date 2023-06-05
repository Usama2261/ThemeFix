import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPointsFourthOfficialComponent } from './key-points-fourth-official.component';

describe('KeyPointsFourthOfficialComponent', () => {
  let component: KeyPointsFourthOfficialComponent;
  let fixture: ComponentFixture<KeyPointsFourthOfficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPointsFourthOfficialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyPointsFourthOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
