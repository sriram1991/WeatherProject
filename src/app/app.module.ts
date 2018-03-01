import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CitySortDirective } from './app.directive';
import { routing } from './app.routes';
 

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AppComponent,
    CitySortDirective,
    HomeComponent,
    WeatherDetailComponent,
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {

}
