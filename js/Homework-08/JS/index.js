import galleryItem from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox___image");

galleryItem.forEach(object => {
  const gallery__item = document.createElement("li");
  gallery__item.className = "gallery__item";
  const gallery__link = document.createElement("a");
  gallery__link.className = "gallery__link";
  gallery__link.href = object.original;
  const gallery__image = document.createElement("img");
  gallery__image.className = "gallery__image";
  gallery__image.src = object.preview;
  gallery__image.dataset.source = object.original;
  gallery__image.alt = object.description;
  const gallery__icon = document.createElement("span");
  gallery__icon.className = "gallery__icon";
  const material__icons = document.createElement("i");
  material__icons.className = "material-icons";
  material__icons.textContent = "zoom_out_map";

  gallery.append(gallery__item);
  gallery__item.append(gallery__link);
  gallery__link.append(gallery__image);
  gallery__link.append(gallery__icon);
  gallery__icon.append(material__icons);
});

gallery.addEventListener("click", clickImage);

function clickImage(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }
  const elem = e.target;
  lightboxImage.src = e.target.dataset.source;
  lightbox.classList.toggle("is-open");
  console.log(elem);
}

lightbox.addEventListener("click", clicklightbox);

function clicklightbox(e) {
  if (e.target.nodeName !== "IMG") {
    lightbox.classList.toggle("is-open");
  }
}

window.addEventListener("keydown", function(e) {
  if (event.key === "Escape") {
    lightbox.classList.toggle("is-open");
  }
});
