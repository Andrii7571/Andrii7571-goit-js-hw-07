import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const gallery = document.querySelector('.gallery');



const markup = galleryItems.map(({ description, original, preview }) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}"/>
                </a>
            </li>`
}).join('');
 
gallery.insertAdjacentHTML('beforeend', markup);

// 2.Реалізація делегування на ul.gallery і отримання url великого зображення.
gallery.addEventListener('click', onClick);

function onClick(evt) {
        if (evt.target.nodeName !== "IMG") {
        return;
    }
    evt.preventDefault();
  
    const instance = basicLightbox.create(`<
                    <img class="gallery__image" src="${evt.target.dataset.source}" alt="${evt.target.currentSrc}"/>
           `,  {
        onShow: () => { 
            document.addEventListener("keydown", offModal);
            },
        onClose: () => {
            document.removeEventListener("keydown", offModal) 
            }
        }
    );
    instance.show();
    function offModal(evt) {
        if (evt.key === 'Escape') {
            instance.close();
        }
    };
    
};

