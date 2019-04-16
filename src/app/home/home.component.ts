import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location = {
    city: 'monterrey',
    code: 'mx'
  };

  weather: any;
  weatherForecast: any;
  value: any;

  // tslint:disable-next-line:variable-name
  constructor(private _weatherService: WeatherService) {

  }

  today: number = Date.now();

  ngOnInit() {
    this.value = localStorage.getItem('location');
    if (this.value != null) {
      this.location = JSON.parse(this.value);
    } else {
      this.location = {
        city: 'London',
        code: 'uk'
      };
    }

    this._weatherService.getWeather(this.location.city, this.location.code).subscribe((Response) => {
      console.log(Response);
      this.weather = Response;
    });

    this._weatherService.getWeatherForecast(this.location.city, this.location.code).subscribe((Response) => {
      console.log(Response);
      this.weatherForecast = Response;
    });

  }

}
