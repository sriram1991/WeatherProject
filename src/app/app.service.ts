import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AppService {

	private headers = new HttpHeaders({'Content-Type': 'application/json'});
	url: string;

	constructor(private http: HttpClient) {

	}

	get_data() {
		this.url = "http://api.openweathermap.org/data/2.5/group?id=1269843,1275004,1264527,1273294,1277333&units=metric&APPID=b460d609283e57b119919a19498c3126";
		return this.http.get(this.url);
	}

	get_weather_by_city(id){
		this.url = "http://api.openweathermap.org/data/2.5/forecast?id="+id+"&APPID=b460d609283e57b119919a19498c3126";
		return this.http.get(this.url);
	}
}