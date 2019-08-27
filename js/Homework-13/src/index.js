import apiServise from './apiService.js';
import photoCardTemplate from './templates/temlPhotoCard.hbs';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import './styles.css';


const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryPhoto: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubHandler);
refs.loadMoreBtn.addEventListener('click',loadMoreBtnHandler);

function searchFormSubHandler(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.query.value;

  clearListItems();

  apiServise.resetPage();

  apiServise.searchQuery = inputValue;

  apiServise.fetchPhotoStreams().then(photoStreams => {
    console.log('photoStreams :', photoCardTemplate(photoStreams));
    const markup = buildListItemsMarkup(photoStreams);

    photoListItems(markup);
  });
}

function loadMoreBtnHandler() {
  apiServise.fetchPhotoStreams().then(photoStreams => {
    const markup = buildListItemsMarkup(photoStreams);

    photoListItems(markup);
  });
}


function photoListItems(items) {
  refs.galleryPhoto.insertAdjacentHTML("beforeend",items);
}

function buildListItemsMarkup(items) {
  return photoCardTemplate(items);
}

function clearListItems() {
  refs.galleryPhoto.innerHTML = '';
}

refs.galleryPhoto.addEventListener('click', modalWindow);

console.log(basicLightbox);

function modalWindow(e) {
  if(e.target.nodeName === "IMG") {
    basicLightbox.create(`<img src=${e.target.dataset.source}>`).show();
  }
}
