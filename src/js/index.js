/*
 * style imports 
 */

import '../css/global.css';

import '../css/blocks/nav.css';
import '../css/blocks/header.css';
import '../css/blocks/about.css';
import '../css/blocks/projects.css';
import '../css/blocks/contact.css';
import '../css/blocks/footer.css';

import '../css/modules/json-view.css';
import '../css/modules/media-object.css';

/*
 * section scripts 
 */

import nav from './nav';
import header from './header';
import about from './about';
import projects from './projects';
import contact from './contact';
import footer from './footer';


/*
 * other imports
 */

import {scrollToY} from './utils';

/*
 * global scripts 
 */

// <SCROLL RELATED STUFF>

window.addEventListener('resize', function () {
  // notify components of intrest
  header.onWindowResize();
});

let firstScroll = true
const SCROLL_ENTER_OFFSET = 350;

// console.log('header: ', header.top, header.bottom);
// console.log('about: ', about.top, about.bottom);
// console.log('projects: ', projects.top, projects.bottom);
// console.log('contact: ', contact.top, contact.bottom);

function scrollListener (e) {
  let pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  if(pos > 0)
    nav.node.classList.add('nav--scrolled')
  else
    nav.node.classList.remove('nav--scrolled')
  
  scrollManager(pos, [header, about, projects, contact]);
}


window.addEventListener('scroll', scrollListener);

scrollListener();

let lastEl = null;


function checkElement (pos, el) {
  return (pos > el.top - SCROLL_ENTER_OFFSET) && (pos < el.bottom - SCROLL_ENTER_OFFSET);
}

// performance critical
function scrollManager(pos, els) {
  let len = els.length;
  
  for(var i = 0; i < len; i++) { // iterate over all elements
    var el = els[i];
    
    if(checkElement(pos, el)) { // if the elements is in the viewport
      if(el == lastEl) { // but not the last element (We want to exectute the handler only once)
        return;
      }
      else { // we scrolled to new mans land
        lastEl = el; // lets cache it here for future calls
        
        for(var j = 0; j < len; j++) { // call onLeave on all elements but no the active one 
          if (els[j] == lastEl)
            continue;
          else
            els[j].onLeave();
        }
        
        el.onEnter(); 
      
      }
    }
  }
  
  
  
}


// </SCROLL RELATED STUFF>


let buttons = document.querySelectorAll('[data-scroll-to]');

Array.prototype.forEach.call(buttons, el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    let targetNode = document.getElementById(this.getAttribute('data-scroll-to'));
    let targetYPosition = targetNode.offsetTop;
    scrollToY(targetYPosition, 600);
    nav.closeNav();
  });
})