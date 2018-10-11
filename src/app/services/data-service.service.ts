import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService{

  constructor(private http: HttpClient) { }

  getGithubUsers(q) {
    
    return this.http.get(' https://api.github.com/search/users', {params: {'q': q}});
  }
}
