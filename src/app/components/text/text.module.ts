import {NgModule} from '@angular/core';
import {TextComponent} from './text.component';
import {CommonModule} from '@angular/common';
import {NgStoryblokModule} from '../../../../projects/ng-storyblok/src/lib/ng-storyblok.module';

@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    NgStoryblokModule,
  ],
  exports: [TextComponent],
})
export class TextModule {
  static component = TextComponent;
}
