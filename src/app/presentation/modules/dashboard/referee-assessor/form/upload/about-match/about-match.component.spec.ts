import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMatchComponent } from './about-match.component';

describe('AboutMatchComponent', () => {
  let component: AboutMatchComponent;
  let fixture: ComponentFixture<AboutMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
