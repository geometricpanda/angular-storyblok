import {makeStateKey} from '@angular/platform-browser';

export const TransferStateCacheKey = makeStateKey<Record<string, any>>('NG_STORYBLOK_DATA')
