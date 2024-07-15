import axios from 'axios';

axios.interceptors.request.use(function (config) {
  console.log(
    `Zapytanie ${config.method} pod ${config.url} zarejestrowano o ${new Date().toISOString()}`
  );
  return config;
});

axios.interceptors.response.use(function (response) {
  console.log(`zapytanie zakończono o ${new Date().toISOString()}`)
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
