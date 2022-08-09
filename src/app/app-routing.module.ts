import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgStoryblokRouteComponent} from '../../projects/ng-storyblok/src/lib/render';
import {NgStoryblokResolver} from '../../projects/ng-storyblok/src/lib/resolver';
import {NgStoryblokComponentResolverGuard} from '../../projects/ng-storyblok/src/lib/guards';

const routes: Routes = [
  {
    path: '**',
    component: NgStoryblokRouteComponent,
    canActivate: [NgStoryblokComponentResolverGuard],
    resolve: {
      blok: NgStoryblokResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
