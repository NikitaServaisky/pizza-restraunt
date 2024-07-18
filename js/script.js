document.addEventListener('DOMContentLoaded', () => {
  //header coding...

  const headerOptions = {
    בית: 'index',
    גלריה: 'gallery',
    תפריט: 'menu',
    הזמנה: 'details',
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

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});

/////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////

//coockies coding....
