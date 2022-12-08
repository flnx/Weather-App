import { html } from './lib.js';
import * as api from './api.js';

export const showCityResult = async (ctx) => {
  ctx.render(loadingTemplate());

  const query = new URLSearchParams(ctx.querystring);
  const result = query.get('search');

  if (result == '') {
    return ctx.render(notFoundTemplate('Field must not be empty'));
  }

  const data = await api.get(result);

  if (typeof data != 'object') {
    return ctx.render(notFoundTemplate(data));
  }
  // calculating the region time
  const currentTime = ctx.getTime(data.timezone);
  
  // current hour
  const hour = currentTime.time.substring(0, 5)

  // getting the correct weather svg icon
  const iconPath = ctx.checkWeatherCode(data.weather[0].id, currentTime.time);

  ctx.render(searchTemplate(data, iconPath, hour));
};

const loadingTemplate = () => html`<p>Loading...</p>`;

export const searchTemplate = (city, iconPath, hour) => {
  return html` <section>
   <h2>Weather in ${city.name}</h2>
    <div class="result">
      <div class="card">
        <div class="card-header">
          <img src="${iconPath}" alt="" />
          <a>${city.weather[0].description}</a>
        </div>
        <div class="card-body">
          <p class="degrees">${city.main.temp} &#8451;</p>
          <a class="feels-like">Feels like: ${city.main.feels_like} &#8451;</a>
          <a class="humidity">Humidity: ${city.main.humidity}%</a>
          <a class="wind">Wind: ${city.wind.speed}km/h</a>
          <a class="time">Time: ${hour}</a>
        </div>
      </div>
    </div>
  </section>`;
};

export const notFoundTemplate = (message) => {
  return html` <section>
    <h2>${message} :(</h2>
  </section>`;
};
