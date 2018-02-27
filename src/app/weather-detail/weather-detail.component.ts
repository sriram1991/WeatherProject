import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';


@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  id: number;
  details: object = {};
  
  constructor(private service : AppService, private router:Router , private route: ActivatedRoute) {

  }
  
  goBack(){
		this.router.navigate([''])    
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.service.get_weather_by_city(this.id).subscribe((values) => {
      this.details = values['list'];
    })
  }

}
