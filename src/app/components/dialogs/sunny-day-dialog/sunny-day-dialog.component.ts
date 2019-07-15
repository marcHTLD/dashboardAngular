import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sunny-day-dialog',
  templateUrl: './sunny-day-dialog.component.html',
  styleUrls: ['./sunny-day-dialog.component.css']
})
export class SunnyDayDialogComponent implements OnInit {

  selected;
  border
  slided = 0;
  array = [];

  onNoClick(): void {
    this.array.push(this.selected);
    this.array.push(this.slided)
    this.array.push(this.border);
    this.dialogRef.close(this.array);
    this.array = [];
  }
  

  constructor(
    public dialogRef: MatDialogRef<SunnyDayDialogComponent>,
    ) { 
  }

  ngOnInit() {
  }

}
