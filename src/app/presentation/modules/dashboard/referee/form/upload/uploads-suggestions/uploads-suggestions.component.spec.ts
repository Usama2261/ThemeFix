import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsSuggestionsComponent } from './uploads-suggestions.component';

describe('UploadsSuggestionsComponent', () => {
  let component: UploadsSuggestionsComponent;
  let fixture: ComponentFixture<UploadsSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadsSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadsSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
