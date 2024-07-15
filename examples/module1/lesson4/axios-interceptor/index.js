import axios from 'axios';

// const requestLogger = (config) => {
//   console.log(
//     `Zapytanie ${config.method} pod ${config.url} zarejestrowano o ${new Date().toISOString()}`
//   );
//   return config;
// }

// axios.interceptors.request.use(requestLogger);

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log(
    `Zapytanie ${config.method} pod ${config.url} zarejestrowano o ${new Date().toISOString()}`
  );
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log(`zapytanie zakończono o ${new Date().toISOString()}`)
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
