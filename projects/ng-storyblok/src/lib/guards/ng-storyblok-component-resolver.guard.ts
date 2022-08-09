import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {catchError, from, map, mergeAll, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {NgStoryblok, NgStoryblokLazyLoaderService} from '../services';
import {findPageComponents} from './find-page-components';

@Injectable({
  providedIn: 'root',
})
export class NgStoryblokComponentResolverGuard implements CanActivate {
  constructor(
    private ngStoryblokLazyLoader: NgStoryblokLazyLoaderService,
    private ngStoryblok: NgStoryblok) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    const url = state.url.slice(1);
    return this.ngStoryblok
      .getStory(url)
      .pipe(map((data) => findPageComponents(data.data)))
      .pipe(map((data) => from(
        Promise.all([
          Array.from(data).map(component =>
            this.ngStoryblokLazyLoader.loadModuleComponent(component)),
        ]))))
      .pipe(mergeAll())
      .pipe(map(() => true))
      .pipe(catchError(() => of(true)))
  }
}
