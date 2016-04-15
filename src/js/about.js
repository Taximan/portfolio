import {syntaxHighlight} from './utils';
import nav from './nav';

const about = document.getElementsByClassName('about')[0];
const container = document.querySelector('.about .json-view__json');
const contents = document.createElement('pre');

// from: http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
function calcAge(birthday) { // birthday is a date
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

let json = JSON.stringify({
  firstName: 'Dawid',
  lastName: 'Czarnik',
  age: calcAge(new Date('1995-07-21T00:00:00+00:00')),
  knows: {
    general: [
      'HTML5/CSS3',
      'latest ES6/7 JS',
      'basic PHP',
      'OOP patterns',
      'functional programming techniques',
      'basic SQL'
    ],
    frameworks: {
      frontEnd: ['react + flux(redux)', 'angular 1.X', 'bootstrap'],
      backEnd: ['koa', 'express', 'laravel']
    },
    tooling: ['webpack(babel loader\u2764)', 'gulp', 'npm / composer'],
    other: ['jquery', 'bookshelf / eloquent', 'socket.io']
  }
}, null, 2);



contents.innerHTML = syntaxHighlight(json)

container.appendChild(contents);

let leftBracket  = document.getElementsByClassName('about__left-bracket')[0];
let rightBracket = document.getElementsByClassName('about__right-bracket')[0];

function openBrackets() {
  leftBracket.classList.remove('about__left-bracket--close');
  rightBracket.classList.remove('about__right-bracket--close');
}

function closeBrackets() {
  leftBracket.classList.add('about__left-bracket--close');
  rightBracket.classList.add('about__right-bracket--close');
}

export default {
  top: about.offsetTop,
  bottom: about.offsetTop + about.offsetHeight,
  onEnter() {
    nav.setActive('about')
    closeBrackets();
  },
  onLeave() {
    openBrackets()
  }
};