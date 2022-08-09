import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

import type {Subscription} from 'rxjs';
import type {Story, StoryData} from 'storyblok-js-client';

@Component({
  selector: 'ng-storyblok-route',
  templateUrl: './ng-storyblok-route.component.html',
})
export class NgStoryblokRouteComponent implements OnInit, OnDestroy {
  story!: StoryData;
  activatedRoute$?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
  ) {
  }

  ngOnInit() {
    this.activatedRoute$ = this
      .activatedRoute
      .data
      .subscribe(({blok}) => this.renderRouteData(blok));
  }

  ngOnDestroy() {
    this.activatedRoute$?.unsubscribe();
  }

  renderRouteData(blok: Story) {
    const {data} = blok;
    const {story} = data;
    this.title.setTitle(story.name);
    this.story = story;
  }

}
