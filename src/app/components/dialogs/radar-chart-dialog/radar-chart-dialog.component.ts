import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-radar-chart-dialog',
  templateUrl: './radar-chart-dialog.component.html',
  styleUrls: ['./radar-chart-dialog.component.css']
})
export class RadarChartDialogComponent implements OnInit {

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
    public dialogRef: MatDialogRef<RadarChartDialogComponent>,
    ) { 
  }

  ngOnInit() {
  }

}
