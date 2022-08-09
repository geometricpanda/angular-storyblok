import {Component} from '@angular/core';
import {NgStoryblokComponent} from '../../../../projects/ng-storyblok/src/lib/ng-storyblok.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.template.html',
})
export class ArticleComponent implements NgStoryblokComponent {
  blok!: NgStoryblokComponent['blok'];
  story!: NgStoryblokComponent['story'];
}
