import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:7001/doh2/applinks/uphnshinny/uphnUIservices/timeblock";

  
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(params){
    return this.httpClient.get(
      `${this.REST_API_SERVER}/getScheduledCrons/?category=${params.category}&
      days=${params.days}&months=${params.months}&years=${params.years}&sHour=${params.sHours}&sMinute=${params.sMinutes}&eHour=${params.eHours}&eMinute=${params.eMinutes}`);
  }
}