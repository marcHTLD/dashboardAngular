import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChartDialogComponent } from './radar-chart-dialog.component';

describe('RadarChartDialogComponent', () => {
  let component: RadarChartDialogComponent;
  let fixture: ComponentFixture<RadarChartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarChartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
