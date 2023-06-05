import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOfficialsAndPlayersComponent } from './upload-officials-and-players.component';

describe('UploadOfficialsAndPlayersComponent', () => {
  let component: UploadOfficialsAndPlayersComponent;
  let fixture: ComponentFixture<UploadOfficialsAndPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadOfficialsAndPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadOfficialsAndPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
