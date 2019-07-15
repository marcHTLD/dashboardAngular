import { Component, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent {

  chartArray = [
    {
      id: 0,
      identifier: 'radarChart'
    },
    {
      id: 1,
      identifier: 'lineChart'
    },
    {
      id: 2,
      identifier: 'doughnutChart'
    },
    {
      id: 3,
      identifier: 'temperature'
    },
    {
      id: 4,
      identifier: 'sunnydays'
    },
    {
      id: 5,
      identifier: 'movie'
    }
  ];

  onDrag(event, identifier) {
    event.dataTransfer.setData('chartIdentifier', identifier);
	}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  

  constructor(private breakpointObserver: BreakpointObserver) {}

}
