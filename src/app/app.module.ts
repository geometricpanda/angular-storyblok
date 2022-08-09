import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgStoryblokModule} from '../../projects/ng-storyblok/src/lib/ng-storyblok.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

const componentModules = {
  article: () =>
    import('./components/article/article.module').then(mod => mod.ArticleModule),
  hero: () =>
    import('./components/logger/logger.module').then(mod => mod.LoggerModule),
  text: () =>
    import('./components/text/text.module').then(mod => mod.TextModule),
  separator: () =>
    import('./components/separator/separator.module').then(mod => mod.SeparatorModule),
  snippet: () =>
    import('./components/logger/logger.module').then(mod => mod.LoggerModule),
  github_repo: () =>
    import('./components/logger/logger.module').then(mod => mod.LoggerModule),
  logger: () =>
    import('./components/logger/logger.module').then(mod => mod.LoggerModule),
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    NgStoryblokModule.forRoot({
      config: {accessToken: 'UM2LrADUyvXeTgEjKgAKCgtt'},
      componentModules,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
