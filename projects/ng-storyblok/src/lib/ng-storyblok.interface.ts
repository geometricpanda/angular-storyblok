import {StoryblokComponent, StoryData} from 'storyblok-js-client';
import {Type} from '@angular/core';

export interface NgStoryblokComponent<T = Record<string, any>> {
  story: StoryData;
  blok: StoryblokComponent<string> & T;
}

export interface NgStoryblokComponentModule {
  component: Type<NgStoryblokComponent>;
}
