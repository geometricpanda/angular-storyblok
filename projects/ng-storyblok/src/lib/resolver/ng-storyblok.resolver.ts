import {Injectable} from '@angular/core';
import type {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import type {Story} from 'storyblok-js-client';
import type {Observable} from 'rxjs';

import {NgStoryblok} from '../services';

@Injectable({providedIn: 'root'})
export class NgStoryblokResolver implements Resolve<Story> {
  constructor(private ngStoryblok: NgStoryblok) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Story> {
    const url = state.url.slice(1);
    return this.ngStoryblok.getStory(url);
  }
}
