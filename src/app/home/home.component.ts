import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : AppService, private router: Router){

  }
  
	data: any;
  get_details(){  	
  	this.service.get_data()
  	.subscribe((res) => {
			this.data = res['list'];
		});
  }
	
 	navigate(id){
		  this.router.navigate(['details', id])
	}

	ngOnInit(): void {
			this.get_details();
	}

}
