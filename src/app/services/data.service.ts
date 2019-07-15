import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeather} from '../components/weather/weatherInterface';
import { ISun} from '../components/sun/sunInterface';
import { ILayout } from '../components/interfaces/layoutInterface'
import { InterfaceMovie } from '../components/movie/movieInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  handleError: any;

  id: number = 0;
  private layout: any;


  constructor(private http: HttpClient) { 
    this.http.get("https://htldashboard.micecim.at/layouts?user_id=100").subscribe(
      (val: any) => {
        this.id = val[0].id;
      }
    );
  }

  getTemp(): Observable<IWeather[]>{
    return this.http.get<IWeather[]>("https://htldashboard.micecim.at/temperaturs");
  }

  getSun(): Observable<ISun[]>{
    return this.http.get<ISun[]>("https://htldashboard.micecim.at/sonnes");
  }

  getLayout(): Observable<ILayout[]>{
    return this.http.get<ILayout[]>("https://htldashboard.micecim.at/layouts?user_id=100");
  }

  getMovie(title: string): Observable<InterfaceMovie> {
    return this.http.get<InterfaceMovie>("http://www.omdbapi.com/?apikey=5d45dbe8&t="+title);
  }

  //webserver
  /*
  deleteLayout(id: number){
    console.log("https://htldashboard.micecim.at/layouts/"+id);
    this.http.delete("https://htldashboard.micecim.at/layouts/"+id).subscribe(
      (val) => {
          console.log("DELETE call successful value returned in body", val);
      },
      response => {
          console.log("DELETE call in error", response);
      },
      () => {
          console.log("The DELETE observable is now completed.");
      });
  }

  postLayout(Layout: Array<any>){
    this.http.post("https://htldashboard.micecim.at/layouts", {
      layout: Layout,
      user_id: 100
    }).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);
          this.id = val.id;
          this.deleteLayout(val.id-1);
          console.log(val, "mama");
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
    console.log(Layout, "supr");
  }
  */
}
