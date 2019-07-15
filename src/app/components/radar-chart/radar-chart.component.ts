import { Component, Injectable } from "@angular/core";
import { RadarChartDialogComponent } from '../dialogs/radar-chart-dialog/radar-chart-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
	selector: "app-radar-chart",
	styleUrls: ['./radar-chart.component.css'],
	templateUrl: "./radar-chart.component.html"
})

@Injectable({
	providedIn: 'root'
})
export class RadarChartComponent {

	private color = 'white';
	private opacity = 1.0;
	private bool = false;

	constructor(private dialog: MatDialog){
		if(localStorage.getItem('radar') != undefined){
			this.color = JSON.parse(localStorage.getItem('radar'))[0];
			this.opacity = JSON.parse(localStorage.getItem('radar'))[1]/10;
			this.bool = JSON.parse(localStorage.getItem('radar'))[2];
		}	
	}

	setIt(){
		if(localStorage.getItem('radar') != undefined){
			this.color = JSON.parse(localStorage.getItem('radar'))[0];
			this.opacity = JSON.parse(localStorage.getItem('radar'))[1]/10;
			this.bool = JSON.parse(localStorage.getItem('radar'))[2];
		}
	}

	openDialog(name: string): void {
		const dialogRef = this.dialog.open(RadarChartDialogComponent);
		dialogRef.afterClosed().pipe().subscribe(
			result => {
				localStorage.setItem('radar',JSON.stringify(result));
				this.setIt();
			}
		); 
	}

	// Radar
	public radarChartLabels: string[] = [
		"Eating",
		"Drinking",
		"Sleeping",
		"Designing",
		"Coding",
		"Cycling",
		"Running"
	];

	public radarChartData: any = [
		{ data: [65, 59, 90, 81, 56, 55, 40], label: "Series A" },
		{ data: [28, 48, 40, 19, 96, 27, 100], label: "Series B" }
	];
	public radarChartType: string = "radar";

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
}
