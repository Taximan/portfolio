import nav from './nav';
import {render, HTTP} from './utils';
import config from '../config.js';

const contact = document.getElementsByClassName('contact')[0];
const contactForm = document.getElementsByClassName('contact__form')[0];
const contactFormSubmitButton = document.getElementsByClassName('contact__submit')[0];

const fields =  {
  firstName: document.querySelector('.contact__fname'),
  lastName: document.querySelector('.contact__lname'),
  email: document.querySelector('.contact__email'), 
  message: document.querySelector('.contact__message'),
};

const clearFormData = () => {
  for(let k in fields) {
    if(fields.hasOwnProperty(k)) 
      fields[k].value = '';
  }
}

const overlayTmpl = document.getElementById('contact-overlay-tmpl');

const renderOverlay = (props) => {
  var html = render(overlayTmpl.innerHTML, props);
  var newNode = document.createElement('div');
  newNode.innerHTML = html;
  return newNode;
}

const successOverlay = () => renderOverlay({
  title: 'got it!',
  iconUrl: require('../media/school.svg'),
  message: 'The mail has been sent successfully and shall be reviewed soon. Want to add something?',
  buttonText: 'Write one more',
  additionalClasses: 'overlay--success'
});

const failureOverlay = () => renderOverlay({
  title: 'what a bummer',
  iconUrl: require('../media/cross.svg'),
  message: 'we encountered a difficulities while attempting to send your message, please try again in a little bit.',
  buttonText: 'Retry',
  additionalClasses: 'overlay--failed'
});

contactForm.addEventListener('submit', function (e) {
   e.preventDefault();
   
   contactFormSubmitButton.disabled = true;
   contactFormSubmitButton.innerHTML = 'sending...';
   
    var email = {
      firstName: fields.firstName.value,
      lastName: fields.lastName.value,
      email: fields.email.value,
      message: fields.message.value,
    };
    
    HTTP.post(config.mailServer, email, (err, data) => {

      if(err) {
        contactForm.appendChild(failureOverlay());
      } else {
        contactForm.appendChild(successOverlay());
        clearFormData();
      }

      contactFormSubmitButton.disabled = false;
      contactFormSubmitButton.innerHTML = 'send';

    });
   
   
});

// contactFormSubmitButton.addEventListener('click', function (e) {
     
//   this.disabled = true;
//   this.innerHTML = 'sending...';
  
//   var email = {
//     firstName: fields.firstName.value,
//     lastName: fields.lastName.value,
//     email: fields.email.value,
//     message: fields.message.value,
//   }
//   // HTTP.post(config.mailServer, email, (err, data) => {
    
//   //   if(err) {
//   //     contactForm.appendChild(failureOverlay());
//   //   } else {
//   //     contactForm.appendChild(successOverlay());
//   //   }
    
//   //   this.disabled = false;
//   //   this.innerHTML = 'send';
    
//   // });
  
  
// });

export default {
  top: contact.offsetTop,
  bottom: contact.offsetTop + contact.offsetHeight,
  onEnter() {
    nav.setActive('contact')
  },
  onLeave() {
  }
};