import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component'; // Asegúrate de importar el componente

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherInfoComponent, // Añade el componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
