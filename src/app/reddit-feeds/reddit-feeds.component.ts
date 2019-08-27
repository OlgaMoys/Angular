import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reddit-feeds',
  templateUrl: './reddit-feeds.component.html',
  styleUrls: ['./reddit-feeds.component.css']
})
export class RedditFeedsComponent implements OnInit {
  results;
  config: any;
  p: number = 1;

  constructor(private http: HttpClient) {}
  private apiUrl = 'https://www.reddit.com/r/help/top.json?';

  ngOnInit() {
    const apiUrl = 'https://www.reddit.com/r/help/top.json?';
     this.http.get(apiUrl).subscribe((response:any) =>  { 
      this.results = response.data.children;
       console.log(this.results);
     });
  }
}


