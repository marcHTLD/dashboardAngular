import { Component, Injectable } from "@angular/core";
import { MatDialog } from '@angular/material';
import { DoughnutChartDialogComponent } from '../dialogs/doughnut-chart-dialog/doughnut-chart-dialog.component';

@Component({
	selector: "app-doughnut-chart",
	styleUrls: ['./doughnut-chart.component.css'],
	templateUrl: "./doughnut-chart.component.html"
})

@Injectable({
	providedIn: 'root'
})

export class DoughnutChartComponent {

	private color = 'white';
	private opacity = 1.0;
	private bool = false;

	constructor(private dialog: MatDialog){
		if(localStorage.getItem('doughnut') != undefined){
			this.color = JSON.parse(localStorage.getItem('doughnut'))[0];
			this.opacity = JSON.parse(localStorage.getItem('doughnut'))[1]/10;
			this.bool = JSON.parse(localStorage.getItem('doughnut'))[2];
		}	
	}


	setIt(){
		if(localStorage.getItem('doughnut') != undefined){
			this.color = JSON.parse(localStorage.getItem('doughnut'))[0];
			this.opacity = JSON.parse(localStorage.getItem('doughnut'))[1]/10;
			this.bool = JSON.parse(localStorage.getItem('doughnut'))[2];
		}	
	}

	openDialog(name: string): void {
		const dialogRef = this.dialog.open(DoughnutChartDialogComponent);
		dialogRef.afterClosed().pipe().subscribe(
			result => {
				localStorage.setItem('doughnut',JSON.stringify(result));
				this.setIt();
			}
		); 
	}

	public doughnutChartLabels: string[] = [
		"Download Sales",
		"In-Store Sales",
		"Mail-Order Sales"
	];
	public doughnutChartData: number[] = [350, 450, 100];
	public doughnutChartType: string = "doughnut";

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
}
