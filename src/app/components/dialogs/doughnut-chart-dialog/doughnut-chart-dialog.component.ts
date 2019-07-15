import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-doughnut-chart-dialog',
  templateUrl: './doughnut-chart-dialog.component.html',
  styleUrls: ['./doughnut-chart-dialog.component.css']
})
export class DoughnutChartDialogComponent implements OnInit {

  selected;
  checked;
  slided = 0;
  array = [];

  onNoClick(): void {
    this.array.push(this.selected);
    this.array.push(this.slided);
    this.array.push(this.checked);
    this.dialogRef.close(this.array);
    this.array = [];
  }
  

  constructor(
    public dialogRef: MatDialogRef<DoughnutChartDialogComponent>,
    ) { 
  }

  ngOnInit() {
  }

}
