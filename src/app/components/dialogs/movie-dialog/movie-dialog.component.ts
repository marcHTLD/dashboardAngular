import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Modal, Dialog } from '../../layout/modal';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  public title: string;
  selected;
  slided = 0;
  array = [];

  onchange(value: string) {
    this.visibleChange.emit(true);
    this.title = value;
  }


  onNoClick(): void {
    this.array.push(this.selected);
    this.array.push(this.slided);
    this.array.push(this.title);
    this.dialogRef.close(this.array);
    this.array = [];
  }



  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>
    ) {
  }

  ngOnInit() {
  }

}
