import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeagueDirectorCurrentComponent } from './current.component';


describe('LeagueDirectorCurrentComponent', () => {
  let component: LeagueDirectorCurrentComponent;
  let fixture: ComponentFixture<LeagueDirectorCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueDirectorCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueDirectorCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
