import { Component, OnInit, Injectable, ChangeDetectorRef,
        Input, NgZone, ElementRef, ViewChild, ChangeDetectionStrategy, ApplicationRef} from '@angular/core';
import {DataService} from '../../services/data.service';
import { LayoutService } from 'src/app/services/layout.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MovieDialogComponent } from '../dialogs/movie-dialog/movie-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-movie',
  styleUrls: ['./movie.component.css'],
  templateUrl: './movie.component.html',
})

@Injectable({
  providedIn: 'root'
})

export class MovieComponent implements OnInit {
  private search: string;
  private title: string;
  private poster: string;

  private color = 'white';
	private opacity = 1.0;


  trigger() {
    if(localStorage.getItem('movie') != undefined) {
      this.getMovie(localStorage.getItem('movie').toString());
    }
    if(localStorage.getItem('movieSetting') != undefined) {
			this.color = JSON.parse(localStorage.getItem('movieSetting'))[0];
			this.opacity = JSON.parse(localStorage.getItem('movieSetting'))[1]/10;
		}
  }

  getMovie(movie: string ) {
    localStorage.setItem('movie', movie.toString());
    this.http.getMovie(movie)
    .toPromise().then(data => {
      console.log(data);
      this.title = data.Title;
      this.poster = data.Poster;
      console.log(this.title, this.poster, event);
      this.ref.tick();
    });
  }

  openDialog(name: string): void {
    console.log(name);
    if (name === 'MovieComponent') {
        const dialogRef = this.dialog.open(MovieDialogComponent);
        dialogRef.afterClosed().subscribe(
          data => {
            localStorage.setItem("movieSetting", JSON.stringify(data));
            if(data[2] != undefined){
              this.getMovie(data[2]);
            }
          }
        );
    } else {
        this.dialog.open(DialogComponent);
    }
  }

  constructor(private http: DataService, public dialog: MatDialog, zone: NgZone, private ref: ApplicationRef) {
    if (localStorage.getItem('movie') != undefined || localStorage.getItem('movie') != undefined) {
      this.trigger();
    } else {
      this.getMovie('tarzan');
    }
  }

  ngOnInit() {
  }

}
