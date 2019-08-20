import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditFeedsComponent } from './reddit-feeds/reddit-feeds.component';
import { FeedDetailsComponent } from './feed-details/feed-details.component';


const routes: Routes = [
  {path: '',  component: RedditFeedsComponent},
  {path: ':id', component: FeedDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
  ngOnInit() {}
}