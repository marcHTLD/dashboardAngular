import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartDialogComponent } from './doughnut-chart-dialog.component';

describe('DoughnutChartDialogComponent', () => {
  let component: DoughnutChartDialogComponent;
  let fixture: ComponentFixture<DoughnutChartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutChartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
