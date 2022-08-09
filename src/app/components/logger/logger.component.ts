import {Component} from '@angular/core';
import {NgStoryblokComponent} from '../../../../projects/ng-storyblok/src/lib/ng-storyblok.interface';

@Component({
  selector: 'app-logger',
  template: `
    <h2>{{blok.component}}</h2>
    <pre>{{blok | json}}</pre>
  `,
  styles: [`
    pre {
      max-width: 100%;
      overflow: scroll;
      background-color: #eee;
      padding: 10px;
      border: 1px solid #CCC;
      color: #333;
    }
  `]
})
export class LoggerComponent implements NgStoryblokComponent {
  story!: NgStoryblokComponent['story'];
  blok!: NgStoryblokComponent['blok'];
}
