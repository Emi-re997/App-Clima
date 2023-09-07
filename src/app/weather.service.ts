import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = environment.apiKey;
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric' // Cambia a 'imperial' si prefieres grados Fahrenheit
    };

    return this.http.get(this.apiUrl, { params });
  }
}
