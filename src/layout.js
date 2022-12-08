import { render } from './lib.js';
import { searchBarTemplate } from './searchBar.js';
import { checkWeatherCode } from './weatherCodes.js';
import { getTime } from './time.js';


const container = document.querySelector('.container');

export const ctxDecorator = (ctx, next) => {
  ctx.render = ctxRender.bind(null, searchBarTemplate(ctx));
  ctx.getTime = getTime;
  ctx.checkWeatherCode = checkWeatherCode;
  next();
};

const ctxRender = (searchBar, section) => render([searchBar, section || null], container);
