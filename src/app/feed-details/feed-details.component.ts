import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed-details',
  templateUrl: './feed-details.component.html',
  styleUrls: ['./feed-details.component.css']
})
export class FeedDetailsComponent implements OnInit {

  id;
  redditFeed;
  redditComments;
  apiUrl = 'https://www.reddit.com';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient

  ) {
    this.route.params.subscribe(params => {
      const idParam = params['id'];
      this.http.get(`${this.apiUrl}/r/help/comments/${idParam}.json`, { observe: 'response' }).subscribe(res => {
        console.log(res);
        let response = res.body;
        this.redditFeed = response[0].data.children[0].data;
        this.redditComments = response[1].data.children;
        console.log(this.redditFeed);
        console.log(this.redditComments);
      })
    })
  };

  ngOnInit() {}
}
