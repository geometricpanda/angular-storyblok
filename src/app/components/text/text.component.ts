import {Component} from '@angular/core';
import {Richtext} from 'storyblok-js-client';
import {NgStoryblokComponent} from '../../../../projects/ng-storyblok/src/lib/ng-storyblok.interface';

interface TextComponentInterface {
  heading?: string;
  subheading?: string;
  body?: Richtext;
}

type TextComponentProps = NgStoryblokComponent<TextComponentInterface>;

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
})
export class TextComponent implements TextComponentProps {
  blok!: TextComponentProps['blok'];
  story!: TextComponentProps['story'];
}
