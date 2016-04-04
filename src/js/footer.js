import starify from './starify';

let footer = document.getElementsByClassName('footer')[0];

starify(footer, window.innerWidth, footer.offsetHeight, 4, true);


export default {};