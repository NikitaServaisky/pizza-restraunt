document.addEventListener('DOMContentLoaded', () => {
  //header coding...

  const headerOptions = {
    בית: 'index',
    'מי אנחנו': 'about',
    'צור קשר': 'contact',
    גלריה: 'gallery',
    תפריט: 'menu',
    הזמנה: 'cart',
  };

  function fillHeader(options) {
    const navList = document.querySelector('ul');
    if (navList) {
      Object.keys(options).forEach((optionText) => {
        const listItem = document.createElement('li');
        const aLink = document.createElement('a');
        aLink.href = `${options[optionText]}.html`;
        aLink.textContent = optionText;
        listItem.appendChild(aLink);
        navList.appendChild(listItem);
      });
    } else {
      console.error('Navigation list element not found.');
    }
  }
  fillHeader(headerOptions);
});

/////////////////////////////////////////////////////////////////

//gallery coding...

const images = document.querySelectorAll('.image');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const nextImg = document.querySelector('.right');
const prevImg = document.querySelector('.left');
const modalImg = document.getElementById('modalImage');

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex].src;
  modal.classList.remove('invisible');
}

function closeModal() {
  modal.classList.add('invisible')
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    openModal(index);
  })
})

modalClose.addEventListener('click', closeModal);
nextImg.addEventListener('click', nextImage);
prevImg.addEventListener('click', prevImage);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////

