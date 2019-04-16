import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '3cd185a060bd682fb9847c655727f8ea';
  url;
  urlForecast;

  constructor(private http: HttpClient) {
    this.url          = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.urlForecast  = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&units=metric&lang=en' + '&APPID=' + this.apiKey).pipe(
      map(res => res ));
  }

  getWeatherForecast(city, code) {
    return this.http.get(this.urlForecast + city + ',' + code + '&units=metric&lang=en' + '&APPID=' + this.apiKey).pipe(
      map(res => res ));
  }

}
