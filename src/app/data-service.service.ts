import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl = "https://jq3ocxrkr6.execute-api.ap-south-1.amazonaws.com/dev/booking-enquire/";
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.baseUrl + "all");
  }

  addUser(data: any) {
    return this.http.post(this.baseUrl + "create/", data)
  }
}