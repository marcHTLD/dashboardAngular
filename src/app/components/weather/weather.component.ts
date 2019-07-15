import { Component, OnInit, Injectable } from '@angular/core';
import {DataService} from '../../services/data.service';
import { chart } from 'highcharts';
import { WeatherDialogComponent } from '../dialogs/weather-dialog/weather-dialog.component';
import { MatDialog } from '@angular/material';

@Injectable({
	providedIn: 'root'
})

@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.css'],
  templateUrl: './weather.component.html'
})
export class WeatherComponent{

  private tempArray = [];

  private bool = false;
  private color = 'white';
  private opacity = 1.0;


	setIt(){
		if(localStorage.getItem('weather') != null) {
			this.color = JSON.parse(localStorage.getItem('weather'))[0];
			this.opacity = JSON.parse(localStorage.getItem('weather'))[1]/10;
			this.bool = JSON.parse(localStorage.getItem('weather'))[2];
		}
	}

  constructor(private http : DataService, private dialog: MatDialog){
    this.http.getTemp()
    .subscribe(data => {
      for(var i=0; i<data.length; i++) {
        this.tempArray.push(data[i].GradCelsius);
        this.lineChartLabels.push(data[i].stunde.toString());
      };
      this.lineChartData.pop();
      this.lineChartData.push({data: this.tempArray, label: 'Temperatur'})
	});
	if(localStorage.getItem('weather') != null) {
		this.color = JSON.parse(localStorage.getItem('weather'))[0];
		this.opacity = JSON.parse(localStorage.getItem('weather'))[1]/10;
		this.bool = JSON.parse(localStorage.getItem('weather'))[2];
	}
  }

  openDialog(name: string): void {
	const dialogRef = this.dialog.open(WeatherDialogComponent);
	dialogRef.afterClosed().pipe().subscribe(
		result => {
			localStorage.setItem("weather", JSON.stringify(result));
			this.setIt();
		}
	); 
}

    public lineChartData: Array<any> = [{data: [], label: 'Temperatur'}];
	public lineChartLabels: Array<any> = [];
	public lineChartOptions: any = {
		responsive: true
    };
    
	  public lineChartColors: Array<any> = [
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
	  public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    
    // events
	  public chartClicked(e: any): void {
      console.log(e);
      }
     
      public chartHovered(e: any): void {
      console.log(e);
      }

}
