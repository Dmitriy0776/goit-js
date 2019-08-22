import { parse } from "url";

const BaseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  fetchPhotoStreams() {
    const requestParams = `?q=${this.query}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=${12}&key=13282514-2415d37e85c92861470a7cbb5`;

    return fetch(BaseUrl + requestParams)
    .then(response => response.json())
    .then(parsedResponse => {
      this.incrementPage();

      return parsedResponse.hits;
  });
},

get searchQuery() {
  return this.query;
},

set searchQuery(string) {
  this.query = string;
},

incrementPage() {
  this.page += 1;
},
resetPage() {
  this.page = 1;
},
};

