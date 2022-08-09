import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {TransferState} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import type {StoryblokCacheProvider, StoryblokResult} from 'storyblok-js-client';
import {BehaviorSubject} from 'rxjs';
import {TransferStateCacheKey} from './transfer-state-cache.key';

@Injectable({
  providedIn: 'root',
})
export class TransferStateCacheService implements StoryblokCacheProvider {

  cache = new BehaviorSubject<Record<string, StoryblokResult>>({});

  constructor(
    private transferState: TransferState,
    @Inject(PLATFORM_ID) platform_id: string,
  ) {
    if (isPlatformBrowser(platform_id)) {
      const cache = this.transferState.get(TransferStateCacheKey, {});
      this.cache.next(cache);
    }
  }

  get(key: string): any {
    const cache = this.cache.getValue();
    return cache[key];
  }

  set(key: string, content: any): void {
    const cache = this.cache.getValue();
    const newCache = {
      ...cache,
      [key]: content,
    };

    this.cache.next(newCache);
    this.transferState.set(TransferStateCacheKey, newCache);
  }

  flush(): void {
    this.cache.next({});
    this.transferState.set(TransferStateCacheKey, {});
  }

}
