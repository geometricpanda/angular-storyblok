import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  Inject,
  Input,
  ViewContainerRef,
} from '@angular/core';
import {NG_STORYBLOK_CONFIG} from '../config';
import {NgStoryblokLazyLoaderService} from '../services';

import type {NgStoryblokConfig} from '../config';
import type {NgStoryblokComponent} from '../ng-storyblok.interface';

@Directive({
  selector: '[ng-storyblok]',
})
export class NgStoryblokDirective {

  componentRef!: ComponentRef<NgStoryblokComponent>;

  @Input() story!: NgStoryblokComponent['story'];
  @Input() blok!: NgStoryblokComponent['blok'];

  constructor(
    private ngStoryblokLazyLoader: NgStoryblokLazyLoaderService,
    private container: ViewContainerRef,
    private cdRef: ChangeDetectorRef,
    @Inject(NG_STORYBLOK_CONFIG) private ngStoryblokConfig: NgStoryblokConfig,
  ) {
  }

  async ngOnInit() {
    if (!this.story) {
      throw new Error('Input [story] is required')
    }
    if (!this.blok) {
      throw new Error('Input [blok] is required')
    }

    const module = this.blok.component;
    const component = await this.ngStoryblokLazyLoader.loadModuleComponent(module);
    this.componentRef = this.container.createComponent<NgStoryblokComponent>(component);
    this.loadComponentData();
  }

  loadComponentData() {
    this.componentRef.instance.story = this.story;
    this.componentRef.instance.blok = this.blok;
    this.cdRef.detectChanges();
  }

}
