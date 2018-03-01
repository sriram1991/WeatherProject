import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details/:id', component: WeatherDetailComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true})
