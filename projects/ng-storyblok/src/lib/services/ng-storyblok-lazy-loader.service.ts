import {Inject, Injectable, Type} from '@angular/core';
import {NG_STORYBLOK_CONFIG, NgStoryblokConfig} from '../config';
import {NgStoryblokComponent, NgStoryblokComponentModule} from '../ng-storyblok.interface';

@Injectable({providedIn: 'root'})
export class NgStoryblokLazyLoaderService {

  constructor(
    @Inject(NG_STORYBLOK_CONFIG) private ngStoryblokConfig: NgStoryblokConfig,
  ) {
  }

  async loadModuleComponent(component: string): Promise<Type<NgStoryblokComponent>> {
    const moduleImport = this.ngStoryblokConfig.componentModules[component];

    if (!moduleImport) {
      throw new Error(`Module "${component}" not found in componentModules`)
    }

    const module: NgStoryblokComponentModule = await moduleImport();

    if (!module.component) {
      throw new Error(`Component not found in "${component}". Perhaps you forgot to add a static "component" property to it's module.`)
    }

    return module.component;
  }

}
