import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('div.gallery')

const galleryMarkup =({preview,original,description})=>{
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}
const galleryMarkupItem = galleryItems.map(galleryMarkup).join('');

galleryEl.insertAdjacentHTML('beforeend',galleryMarkupItem);

galleryEl.addEventListener("click",clickBtn);

function clickBtn(event){
  if(event.target.nodeName !== "IMG"){
    return
  }
  event.preventDefault()
  console.log(event.target.nodeName)
  modalWindow(event.target.dataset.source)
  // console.log(event.target.dataset.source)
}
let instance;
function modalWindow(src){
  instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
`,
{
  onShow: instance => {
    addListener();
  },
  onClose: instance => {
    removeListener();
  },
}),
instance.show();
}

function addListener() {
window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
if (event.code === 'Escape') {
instance.close();
}
}

function removeListener() {
window.removeEventListener('keydown', onEscClick);
}
