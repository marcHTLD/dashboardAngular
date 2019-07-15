import {Component, Inject, Injectable, NgModule} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MovieDialogComponent } from '../dialogs/movie-dialog/movie-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Injectable({
    providedIn: 'root'
  })
/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog',
  templateUrl: './modal.html',
})
export class Dialog {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(name:String): void {
    console.log(name);
    if(name == "MovieComponent"){
        this.dialog.open(MovieDialogComponent);
    }else{
        this.dialog.open(DialogComponent);
    }
    /*
    const dialogRef = this.dialog.open(Modal, {
        height: '400px',
        width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    */
  }

}


@Component({
  selector: 'modal',
  templateUrl: '../dialogs/movie-dialog/movie-dialog.component.html',
})
export class Modal {

  constructor(public dialogRef: MatDialogRef<Modal>,) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}