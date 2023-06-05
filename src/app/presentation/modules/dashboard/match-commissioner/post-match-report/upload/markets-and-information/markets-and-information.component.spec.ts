import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsAndInformationComponent } from './markets-and-information.component';

describe('MarketsAndInformationComponent', () => {
  let component: MarketsAndInformationComponent;
  let fixture: ComponentFixture<MarketsAndInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketsAndInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketsAndInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
