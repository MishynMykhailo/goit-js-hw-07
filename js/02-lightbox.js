import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryMarkup = ({preview,original,description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}

const galleryMarkupItem = galleryItems.map(galleryMarkup).join("");

const galleryEl = document.querySelector("ul.gallery")

galleryEl.insertAdjacentHTML('beforeend',galleryMarkupItem)

let gallery = new SimpleLightbox('.gallery a', {captions:true,captionsData:'alt',captionDelay:250,});