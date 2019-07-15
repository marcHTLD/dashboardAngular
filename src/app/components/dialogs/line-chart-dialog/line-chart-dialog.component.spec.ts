import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDialogComponent } from './line-chart-dialog.component';

describe('LineChartDialogComponent', () => {
  let component: LineChartDialogComponent;
  let fixture: ComponentFixture<LineChartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
