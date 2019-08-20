import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RedditFeedsComponent } from './reddit-feeds/reddit-feeds.component';
import { FeedDetailsComponent } from './feed-details/feed-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditFeedsComponent,
    FeedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
