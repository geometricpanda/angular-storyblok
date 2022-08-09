import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './article.component';
import {NgStoryblokModule} from '../../../../projects/ng-storyblok/src/lib/ng-storyblok.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    NgStoryblokModule,
  ],
  exports: [ArticleComponent],
})
export class ArticleModule {
  static component = ArticleComponent;
}
