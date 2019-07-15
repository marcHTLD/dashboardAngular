import { Component, OnInit, Injectable, ApplicationRef } from '@angular/core';
import {DataService} from '../../services/data.service';
import { chart } from 'highcharts';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SunnyDayDialogComponent } from '../dialogs/sunny-day-dialog/sunny-day-dialog.component';

@Injectable({
	providedIn: 'root'
})

@Component({
  selector: 'app-sun',
  styleUrls: ['./sun.component.css'],
  templateUrl: './sun.component.html'
})
export class SunComponent{

	bool = false;

	private color = 'green';
	private opacity = 1.0;
	private border = 'white';


	setIt(){
		if(localStorage.getItem('sun') != undefined) {
			this.color = JSON.parse(localStorage.getItem('sun'))[0];
			this.opacity = JSON.parse(localStorage.getItem('sun'))[1]/10;
			this.border = "1px solid " + JSON.parse(localStorage.getItem('sun'))[2];
		}
	}


	openDialog(name: string): void {
		const dialogRef = this.dialog.open(SunnyDayDialogComponent);
		dialogRef.afterClosed().toPromise().then(
		result => {
			localStorage.setItem("sun", JSON.stringify(result));
			this.setIt();
		});  
	}

	ngDoCheck(){

	}

	private tempArray = [];

	constructor(private http : DataService, public dialog: MatDialog, private appRef: ApplicationRef){
		this.http.getSun()
		.subscribe(data => {
		for(var i=0; i<data.length; i++){
			this.tempArray.push(data[i].sonnentage);
			this.lineChartLabels.push(data[i].monat);
		};
		this.lineChartData.pop();
		this.lineChartData.push({data: this.tempArray, label: 'Sonnentage'})
		});
		if(localStorage.getItem('sun') != undefined) {
			this.color = JSON.parse(localStorage.getItem('sun'))[0];
			this.opacity = JSON.parse(localStorage.getItem('sun'))[1]/10;
		}
	}

    public lineChartData:Array<any> = [{data: [], label: 'Sonnentage'}];
	  public lineChartLabels:Array<any> = [];
	  public lineChartOptions:any = {
		responsive: true
    };
    
	  public lineChartColors:Array<any> = [
		{ // grey
		  backgroundColor: 'rgba(148,159,177,0.2)',
		  borderColor: 'rgba(148,159,177,1)',
		  pointBackgroundColor: 'rgba(148,159,177,1)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // dark grey
		  backgroundColor: 'rgba(77,83,96,0.2)',
		  borderColor: 'rgba(77,83,96,1)',
		  pointBackgroundColor: 'rgba(77,83,96,1)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgba(77,83,96,1)'
		},
		{ // grey
		  backgroundColor: 'rgba(148,159,177,0.2)',
		  borderColor: 'rgba(148,159,177,1)',
		  pointBackgroundColor: 'rgba(148,159,177,1)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	  ];
	  public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    
    // events
	  public chartClicked(e:any):void {
      console.log(e);
      }
     
      public chartHovered(e:any):void {
      console.log(e);
      }
  
}
