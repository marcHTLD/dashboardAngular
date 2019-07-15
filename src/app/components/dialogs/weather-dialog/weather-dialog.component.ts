import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrls: ['./weather-dialog.component.css']
})
export class WeatherDialogComponent implements OnInit {

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
    public dialogRef: MatDialogRef<WeatherDialogComponent>,
    ) { 
  }

  ngOnInit() {
  }

}
