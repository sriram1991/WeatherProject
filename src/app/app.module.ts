import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { HomeComponent } from './home/home.component';
import { CitySortDirective } from './app.directive';

// Angular Router configration
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: WeatherDetailComponent }
];

 
@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    HomeComponent,
    CitySortDirective,
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
