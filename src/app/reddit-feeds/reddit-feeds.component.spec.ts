import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditFeedsComponent } from './reddit-feeds.component';

describe('RedditFeedsComponent', () => {
  let component: RedditFeedsComponent;
  let fixture: ComponentFixture<RedditFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
