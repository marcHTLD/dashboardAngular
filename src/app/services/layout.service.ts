import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import {DataService} from '../services/data.service';

// COMPONENTS
import { LineChartComponent } from "../components/line-chart/line-chart.component";
import { RadarChartComponent } from "../components/radar-chart/radar-chart.component";
import { DoughnutChartComponent } from "../components/doughnut-chart/doughnut-chart.component";
import { WeatherComponent} from "../components/weather/weather.component";
import { SunComponent } from "../components/sun/sun.component";
import { MovieComponent } from '../components/movie/movie.component';

export interface IComponent {
  id: string;
  componentRef: string;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {


  public layout: GridsterItem[] = [];

  public options: GridsterConfig = {
    enableEmptyCellDrop: true,
    emptyCellDropCallback: this.onDrop.bind(this),
    outerMarginRight: 50,
    displayGrid: 'none',
    maxCols: 5,
    maxRows: 5,
    minCols: 5,
    minRows: 5,
    draggable: {
      enabled: true,
      dropOverItems: true,
    },
    pushItems: true,
    resizable: {
      enabled: true
    }
  };

  public components: IComponent[] = [];
  dropId: string;
  iterableDiffer: any;
  static layout: any;


  constructor(private http: DataService) {
    this.getLayoutPositionStorage();
  }


  setLayoutPositionStorage(): void {
    // webserver
    // this.http.postLayout(this.layout);

    // localStorage
    localStorage.removeItem('position');
    localStorage.setItem('position', JSON.stringify(this.layout));
  };


  getLayoutPositionStorage(): void {
    // storage server
    /*
    this.http.getLayout()
    .subscribe(data => {
      if(!(data[0].layout === null)){
        for(var i=0; i< data[0].layout.length; i++){
          switch(data[0].layout[i].name){
            case "RadarChartComponent":
              this.layout.push({x: data[0].layout[i].x, y: data[0].layout[i].y, rows: data[0].layout[i].rows, cols: data[0].layout[i].cols, id: data[0].layout[i].id, name: data[0].layout[i].name, component: RadarChartComponent});
              break;
            case "LineChartComponent":
              this.layout.push({x: data[0].layout[i].x, y: data[0].layout[i].y, rows: data[0].layout[i].rows, cols: data[0].layout[i].cols, id: data[0].layout[i].id, name: data[0].layout[i].name, component: LineChartComponent});
              break;
            case "DoughnutChartComponent":
              this.layout.push({x: data[0].layout[i].x, y: data[0].layout[i].y, rows: data[0].layout[i].rows, cols: data[0].layout[i].cols, id: data[0].layout[i].id, name: data[0].layout[i].name, component: DoughnutChartComponent});
              break;
            case "WeatherComponent":
              this.layout.push({x: data[0].layout[i].x, y: data[0].layout[i].y, rows: data[0].layout[i].rows, cols: data[0].layout[i].cols, id: data[0].layout[i].id, name: data[0].layout[i].name, component: WeatherComponent});
              break;
            case "SunComponent":
              this.layout.push({x: data[0].layout[i].x, y: data[0].layout[i].y, rows: data[0].layout[i].rows, cols: data[0].layout[i].cols, id: data[0].layout[i].id, name: data[0].layout[i].name, component: SunComponent});
              break;
          }
        }
      }
      console.log(data);
  })*/

    // localStorage

    if (!(localStorage.getItem('position') === null)) {
      let positions: GridsterItem[] = JSON.parse(localStorage.getItem('position'));
      console.log(positions, "jahoo");
      for(var i=0; i< positions.length; i++){
        switch(positions[i].name){
          case "RadarChartComponent":
            this.layout.push({x: positions[i].x, y: positions[i].y, rows: positions[i].rows, cols: positions[i].cols, id: positions[i].id, name: positions[i].name, component: RadarChartComponent});
            break;
          case "LineChartComponent":
            this.layout.push({x: positions[i].x, y: positions[i].y, rows: positions[i].rows, cols: positions[i].cols, id: positions[i].id, name: positions[i].name, component: LineChartComponent});
            break;
          case "DoughnutChartComponent":
            this.layout.push({x: positions[i].x, y: positions[i].y, rows: positions[i].rows, cols: positions[i].cols, id: positions[i].id, name: positions[i].name, component: DoughnutChartComponent});
            break;
          case "WeatherComponent":
            this.layout.push({x: positions[i].x, y: positions[i].y, rows: positions[i].rows, cols: positions[i].cols, id: positions[i].id, name: positions[i].name, component: WeatherComponent});
            break;
          case "SunComponent":
            this.layout.push({x: positions[i].x, y: positions[i].y, rows: positions[i].rows, cols: positions[i].cols, id: positions[i].id, name: positions[i].name, component: SunComponent});
            break;
          case "MovieComponent":
            this.layout.push({x: positions[i].x, y: positions[i].y, rows: positions[i].rows, cols: positions[i].cols, id: positions[i].id, name: positions[i].name, component: MovieComponent, title: positions[i].title});
            break;
        }
      }
    }
    
  };

  onDrop(ev) {
    const componentType = ev.dataTransfer.getData('chartIdentifier');
    switch (componentType) {
      case 'radarChart':
				return this.layout.push({
          id: UUID.UUID(),
					cols: 2,
					rows: 2,
					x: 0,
					y: 0,
					component: RadarChartComponent,
          name: "RadarChartComponent",
        });
			case "lineChart":
				return this.layout.push({
          id: UUID.UUID(),
					cols: 2,
					rows: 2,
					x: 0,
					y: 0,
					component: LineChartComponent,
					name: "LineChartComponent"
				});
			case "doughnutChart":
				return this.layout.push({
          id: UUID.UUID(),
					cols: 2,
					rows: 2,
					x: 0,
					y: 0,
					component: DoughnutChartComponent,
					name: "DoughnutChartComponent"
        });
        case "temperature":
          return this.layout.push({
            id: UUID.UUID(),
            cols: 2,
            rows: 2,
            x: 0,
            y: 0,
            component: WeatherComponent,
            name: "WeatherComponent"
          });
        case "sunnydays":
          return this.layout.push({
            id: UUID.UUID(),
            cols: 2,
            rows: 2,
            x: 0,
            y: 0,
            component: SunComponent,
            name: "SunComponent"
          });
          case "movie":
          return this.layout.push({
            id: UUID.UUID(),
            cols: 2,
            rows: 2,
            x: 0,
            y: 0,
            component: MovieComponent,
            name: "MovieComponent",
            title: "Tarzan"
          });
    }
    console.log(this.layout);
	}

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.layout);
    if (changes) {
        console.log('Changes detected!');
    }
}


  addItem(): void {
    this.layout.push({
      cols: 1,
      id: UUID.UUID(),
      rows: 1,
      x: 0,
      y: 0
    });
  }
  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
  }

  setDropId(dropId: string): void {
    this.dropId = dropId;
  }
  dropItem(dragId: string): void {
    const { components } = this;
    const comp: IComponent = components.find(c => c.id === this.dropId);

    const updateIdx: number = comp ? components.indexOf(comp) : components.length;
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId
    };
    this.components = Object.assign([], components, { [updateIdx]: componentItem });
  }
  getComponentRef(id: string): string {
    const comp = this.components.find(c => c.id === id);
    return comp ? comp.componentRef : null;
  }
}

