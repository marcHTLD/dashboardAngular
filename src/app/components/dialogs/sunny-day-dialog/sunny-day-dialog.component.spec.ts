import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnyDayDialogComponent } from './sunny-day-dialog.component';

describe('SunnyDayDialogComponent', () => {
  let component: SunnyDayDialogComponent;
  let fixture: ComponentFixture<SunnyDayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunnyDayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnyDayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
