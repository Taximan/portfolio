let navbar = document.getElementsByClassName('nav')[0];
let navHam = document.getElementsByClassName('nav__mobile-nav-toggle')[0];

let navbarItems = {
  top: document.getElementsByClassName('nav__top')[0],
  about: document.getElementsByClassName('nav__about')[0],
  projects: document.getElementsByClassName('nav__projects')[0],
  contact: document.getElementsByClassName('nav__contact')[0]
};

function cleanAllNavItemsFromActiveClass() {
  for(var k in navbarItems) {
    if(navbarItems.hasOwnProperty(k)) {
      navbarItems[k].classList.remove('nav__button--active');
    }
  }
}

const toggleNav = () => navbar.classList.toggle('nav--make-mobile-menu-visiable');
const closeNav = () => navbar.classList.remove('nav--make-mobile-menu-visiable');
navHam.addEventListener('click', e => {
  e.preventDefault();
  toggleNav();
}, false);

export default {
  node: navbar, 
  
  // toggles the MOBILE navigation
  toggleNav: toggleNav,
  closeNav: closeNav,
  
  setActive(navbarItem) {
    cleanAllNavItemsFromActiveClass();
    switch(navbarItem) {
      case 'top':
        navbarItems.top.classList.add('nav__button--active');
        break;
      case 'about':
        navbarItems.about.classList.add('nav__button--active');
        break;
      case 'projects':
        navbarItems.projects.classList.add('nav__button--active');
        break;
      case 'contact':
        navbarItems.contact.classList.add('nav__button--active');
        break; 
    }
  }
  
}