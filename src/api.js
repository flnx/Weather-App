const url = 'https://express-proxy-a02q.onrender.com/weather';

const requester = async (method, city) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city }),
    });

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
