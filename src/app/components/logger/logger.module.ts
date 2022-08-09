import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerComponent} from './logger.component';
import {NgStoryblokModule} from '../../../../projects/ng-storyblok/src/lib/ng-storyblok.module';

@NgModule({
  declarations: [LoggerComponent],
  imports: [CommonModule],
  exports: [LoggerComponent],
})
export class LoggerModule implements NgStoryblokModule {
  static component = LoggerComponent
}
