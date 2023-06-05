import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMatchReportComponent } from './post-match-report.component';

describe('PostMatchReportComponent', () => {
  let component: PostMatchReportComponent;
  let fixture: ComponentFixture<PostMatchReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMatchReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMatchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
