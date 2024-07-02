//header coding...

const headerOptions = {
  'בית': 'index',
  'מי אנחנו': 'about',
  'צור קשר': 'contact',
  'גלריה': 'gallery',
  'תפריט': 'menu',
  'הזמנה': 'cart',
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

document.addEventListener('DOMContentLoaded', () => {
  fillHeader(headerOptions);
});

//gallery coding...

const arrowNext = document.querySelector('.right');
const arrowPrv = document.querySelector('.left');
const closeWin = document.querySelector('.modal-close');
const openWin = document.querySelectorAll('.gal-img');

