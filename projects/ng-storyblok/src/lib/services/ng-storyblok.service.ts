import {Inject, Injectable} from '@angular/core';
import StoryblokClient, {RichtextInstance} from 'storyblok-js-client';
import {from, of, tap} from 'rxjs';

import type {Observable} from 'rxjs';

import type {
  Stories,
  StoriesParams,
  Story,
  StoryblokManagmentApiResult,
  StoryblokResult,
  StoryData,
  StoryParams,
} from 'storyblok-js-client';

import {NG_STORYBLOK_CONFIG, NgStoryblokConfig} from '../config';
import {TransferStateCacheService} from '../transfer-state/transter-state-cache.service';

@Injectable({providedIn: 'root'})
export class NgStoryblok {

  private readonly client: StoryblokClient;

  get richTextResolver(): RichtextInstance {
    return this.client.richTextResolver;
  }

  constructor(
    private transferStateCache: TransferStateCacheService,
    @Inject(NG_STORYBLOK_CONFIG) storyblokConfig: NgStoryblokConfig,
  ) {
    this.client = new StoryblokClient(
      storyblokConfig.config,
      storyblokConfig.endpoint,
    );
  }

  get(slug: string, params?: any): Observable<StoryblokResult> {
    const key = JSON.stringify({slug, params});
    const cache = this.transferStateCache.get(key);
    return cache
      ? of(cache)
      : from(this.client.get(slug, params))
        .pipe(tap(data => this.transferStateCache.set(key, data)));
  }

  getAll<T>(slug: string, params?: any, entity?: string): Observable<Array<StoryData<T>>> {
    const key = JSON.stringify({slug, params, entity});
    const cache = this.transferStateCache.get(key);
    return cache
      ? of(cache)
      : from(this.client.getAll(slug, params, entity))
        .pipe(tap(data => this.transferStateCache.set(key, data)));
  }

  post(slug: string, params?: any): Observable<StoryblokManagmentApiResult> {
    const request = this.client.post(slug, params);
    return from(request);
  }

  put(slug: string, params?: any): Observable<StoryblokManagmentApiResult> {
    const request = this.client.put(slug, params);
    return from(request);
  }

  delete(slug: string, params?: any): Observable<StoryblokManagmentApiResult> {
    const request = this.client.delete(slug, params);
    return from(request);
  }

  getStories(params?: StoriesParams): Observable<Stories> {
    const key = JSON.stringify({params});
    const cache = this.transferStateCache.get(key);
    return cache
      ? of(cache)
      : from(this.client.getStories(params))
        .pipe(tap(data => this.transferStateCache.set(key, data)));
  }

  getStory(slug: string, params?: StoryParams): Observable<Story> {
    const key = JSON.stringify({slug, params});
    const cache = this.transferStateCache.get(key);
    return cache
      ? of(cache)
      : from(this.client.getStory(slug, params))
        .pipe(tap(data => this.transferStateCache.set(key, data)))
  }

  setToken(token: string): void {
    this.client.setToken(token);
  }

  getToken(): string {
    return this.client.getToken()
  }

  cacheResponse(url: string, params: any): Observable<StoryblokResult> {
    const key = JSON.stringify({url, params});
    const cache = this.transferStateCache.get(key);
    return cache
      ? of(cache)
      : from(this.client.cacheResponse(url, params))
        .pipe(tap(data => this.transferStateCache.set(key, data)))
  }

  cacheVersions(): Record<string, string> {
    return this.client.cacheVersions();
  }

  cacheVersion(): string {
    return this.client.cacheVersion();
  }

  flushCache(): Observable<StoryblokClient> {
    const request = this.client.flushCache();
    this.transferStateCache.flush();
    return from(request);
  }

}
