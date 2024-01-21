const SUNRISE = 6;
const SUNSET = 17;

export const checkWeatherCode = (id, time) => {
  let path = null;

  let hour = Number(time.substring(0, 2));

  if (id > 199 && id < 233) {
    path = '/svg/thunder.svg';
  } else if (id > 299 && id < 322) {
    path = '/svg/rainy-7.svg';
  } else if (id > 499 && id < 505) {
    path = '/svg/rainy-3.svg';
  } else if (id > 504 && id < 532) {
    path = 'svg/rainy-6.svg';
  } else if (id > 599 && id < 623) {
    path = '/svg/snowy-6.svg';
  } else if (id > 700 && id < 782) {
    path = '/svg/mist.svg';
  } else if (id == 800) {
    if (hour > SUNRISE && hour < SUNSET) {
      path = '/svg/day.svg';
    } else {
      path = '/svg/night.svg';
    }
  } else if (id > 800 && id < 803) {
    if (hour > SUNRISE && hour < SUNSET) {
      path = '/svg/cloudy-day-1.svg';
    } else {
      path = '/svg/cloudy-night-1.svg';
    }
  } else if (id > 802 && id < 805) {
    if (hour > SUNRISE && hour < SUNSET) {
      path = '/svg/cloudy-day-3.svg';
    } else {
      path = '/svg/cloudy-night-3.svg';
    }
  }

  return path;
};
