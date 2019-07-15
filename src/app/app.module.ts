import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { LineChartComponent } from "../app/components/line-chart/line-chart.component";
import { RadarChartComponent } from "../app/components/radar-chart/radar-chart.component";
import { DoughnutChartComponent } from "../app/components/doughnut-chart/doughnut-chart.component";
import { WeatherComponent } from './components/weather/weather.component';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { ChartModule } from 'angular-highcharts';
import { ExampleChartComponent } from './components/charts/example-chart/example-chart.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatListModule } from '@angular/material';
import { DynamicModule } from 'ng-dynamic-component';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SunComponent} from './components/sun/sun.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {Dialog} from '../app/components/layout/modal';
import {Modal} from '../app/components/layout/modal';
import { DialogComponent } from './dialog/dialog.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDialogComponent } from './components/dialogs/movie-dialog/movie-dialog.component';
import {MatInputModule} from '@angular/material/input';
import { SunnyDayDialogComponent } from './components/dialogs/sunny-day-dialog/sunny-day-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { WeatherDialogComponent } from './components/dialogs/weather-dialog/weather-dialog.component';
import { RadarChartDialogComponent } from './components/dialogs/radar-chart-dialog/radar-chart-dialog.component';
import { LineChartDialogComponent } from './components/dialogs/line-chart-dialog/line-chart-dialog.component';
import { DoughnutChartDialogComponent } from './components/dialogs/doughnut-chart-dialog/doughnut-chart-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective,
    ExampleChartComponent,
    MainNavComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    WeatherComponent,
    SunComponent,
    DialogComponent,
    MovieComponent,
    MovieDialogComponent,
    SunnyDayDialogComponent,
    WeatherDialogComponent,
    RadarChartDialogComponent,
    LineChartDialogComponent,
    DoughnutChartDialogComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    ChartModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    DynamicModule.withComponents([DoughnutChartComponent, RadarChartComponent, LineChartComponent, WeatherComponent, SunComponent, MovieComponent]),
    ChartsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    DragDropModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  entryComponents: [
    Example1Component,
    Example2Component,
    DialogComponent,
    MovieDialogComponent,
    SunnyDayDialogComponent,
    WeatherDialogComponent,
    LineChartDialogComponent,
    RadarChartDialogComponent,
    DoughnutChartDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
