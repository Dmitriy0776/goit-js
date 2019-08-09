import './styles.css';
import getGeoPosition from './getGeoPosition';
import fetchWeather from './fetchWeather';
import PNotify from 'pnotify/dist/es/PNotify';
const form = document.querySelector('form');

function getWeathcer(query) {
  const spinner = document.querySelector('.spinner');
  spinner.classList.add('active');
  document.querySelector('.weather').classList.add('is-hidden');
  setTimeout(
    () =>
      fetchWeather(query).then(data => {
        document.querySelector('[class="icon"]').src =
          data.current.condition.icon;
        document.querySelector('[class="icon"]').alt =
          data.current.condition.text;
        document.querySelector('[data-field="location"]').textContent =
          data.location.name;
        document.querySelector('[data-field="temp"]').textContent = `${
          data.current.temp_c
        }\u2103`;
        document.querySelector('[data-field="humidity"]').textContent = `${
          data.current.humidity
        }%`;
        document.querySelector('[data-field="wind"]').textContent = `${
          data.current.wind_kph
        }kph`;
        document.querySelector('[data-field="wind"]').textContent = `${
          data.current.wind_kph
        }kph`;
        document.querySelector('[data-field="conditions"]').textContent = `${
          data.current.condition.text
        }`;

        spinner.classList.remove('active');
        document.querySelector('.weather').classList.remove('is-hidden');
      }),
    1500,
  );
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  getWeathcer(e.currentTarget.elements.city.value);
});

getGeoPosition()
  .then(location => {
    const query = `${location.coords.latitude},${location.coords.longitude}`;
    getWeathcer(query);
  })
  .catch(error => {
    PNotify.error(
      'Нет прав доступа к геопозиции, используйте поиск по имени города.',
    );
  });
