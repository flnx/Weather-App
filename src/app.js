import page from '//unpkg.com/page/page.mjs';
import { ctxDecorator } from './layout.js';
import { showSearchBar } from './searchBar.js';
import { showCityResult } from './cityResult.js';

console.log('hello')

page(ctxDecorator);
page('/index.html/', '/');
page('/', showSearchBar);
page('/r/', showCityResult);
page.start();

