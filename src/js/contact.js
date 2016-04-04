import nav from './nav';

const contact = document.getElementsByClassName('contact')[0];

export default {
  top: contact.offsetTop,
  bottom: contact.offsetTop + contact.offsetHeight,
  onEnter() {
    nav.setActive('contact')
  },
  onLeave() {
  }
};