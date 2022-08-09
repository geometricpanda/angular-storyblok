import {Pipe, PipeTransform} from '@angular/core';
import {NgStoryblok} from '../services';
import {Richtext} from 'storyblok-js-client';

@Pipe({
  name: 'ngStoryblokRichText'
})
export class NgStoryblokRichTextPipe implements PipeTransform {

  constructor(private client: NgStoryblok) {
  }

  transform(value: Richtext): string {
    return this.client.richTextResolver.render(value)
  }
}
