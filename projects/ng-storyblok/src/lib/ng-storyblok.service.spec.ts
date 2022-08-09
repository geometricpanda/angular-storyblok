import { TestBed } from '@angular/core/testing';

import { NgStoryblokService } from './ng-storyblok.service';

describe('NgStoryblokService', () => {
  let service: NgStoryblokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStoryblokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
