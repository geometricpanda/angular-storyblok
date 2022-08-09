import {InjectionToken} from '@angular/core';
import type {StoryblokConfig} from 'storyblok-js-client';

export interface NgStoryblokConfig {
  config: StoryblokConfig;
  componentModules: Record<string, () => Promise<any>>;
  endpoint?: string;
}

export const NG_STORYBLOK_CONFIG = new InjectionToken<NgStoryblokConfig>('STORYBLOK_CONFIG');
