const baseUrl = 'https://api.apixu.com/v1/current.json';

const key = '?key=be5f9fa4cd644103a12104533190708';

export default function fetchWeather(query) {
  return fetch(`${baseUrl}${key}&q=${query}`).then(response => response.json());
}
