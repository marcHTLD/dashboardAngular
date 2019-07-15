import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService, IComponent } from '../../services/layout.service';
import { MovieComponent } from '../../components/movie/movie.component';
import {FormControl} from '@angular/forms';
import { SunComponent } from '../sun/sun.component';
import { WeatherComponent } from '../weather/weather.component';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  openDialog(name: string) {
    switch (name) {
      case 'MovieComponent':
        this.movieComponent.openDialog(name);
        break;
      case 'SunComponent':
        this.sunComponent.openDialog(name);
        break;
      case 'WeatherComponent':
        this.weatherComponent.openDialog(name);
        break;
      case 'RadarChartComponent':
        this.radarChartComponent.openDialog(name);
        break;
      case 'LineChartComponent':
        this.lineChartComponent.openDialog(name);
        break;
      case 'DoughnutChartComponent':
        this.doughnutChartComponent.openDialog(name);
        break;
    }
  }
  
  mode = new FormControl('over');

  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }
  get components(): IComponent[] {
    return this.layoutService.components;
  }
  constructor(
    private layoutService: LayoutService,
    private movieComponent: MovieComponent,
    private sunComponent: SunComponent,
    private weatherComponent: WeatherComponent,
    private radarChartComponent: RadarChartComponent,
    private lineChartComponent: LineChartComponent,
    private doughnutChartComponent: DoughnutChartComponent
  ) { }

  ngOnInit() {
  }

}
