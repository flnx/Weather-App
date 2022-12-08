const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '925b8ded1ab2b1878b10051f097bd078';

const endpoints = {
  city: (city) => `${city}&appid=${API_KEY}&units=metric`,
};

const requester = async (method, city) => {
  try {
    const res = await fetch(url + endpoints.city(city));

    if (res.ok) {
      return res.json();
    } else {
      const error = await res.json();
      throw new Error(error.message);
    }
  } catch (err) {
    return err.message;
  }
};

export const get = requester.bind(null, 'get');
