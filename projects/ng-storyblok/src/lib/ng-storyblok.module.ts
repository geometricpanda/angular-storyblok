import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NG_STORYBLOK_CONFIG, NgStoryblokConfig} from './config';
import {NgStoryblokRouteComponent, NgStoryblokDirective} from './render';
import {NgStoryblokRichTextPipe} from './pipes';

@NgModule({
  declarations: [
    NgStoryblokRouteComponent,
    NgStoryblokDirective,
    NgStoryblokRichTextPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgStoryblokRouteComponent,
    NgStoryblokDirective,
    NgStoryblokRichTextPipe
  ],
})
export class NgStoryblokModule {

  static forRoot({
    config,
    componentModules = {},
    endpoint,
  }: NgStoryblokConfig): ModuleWithProviders<NgStoryblokModule> {

    return {
      ngModule: NgStoryblokModule,
      providers: [{
        provide: NG_STORYBLOK_CONFIG,
        useValue: {config, endpoint, componentModules},
      }],
    }
  }

}
