import nav from './nav';

let projectsContainer = document.getElementsByClassName('projects')[0];
let projectItems = document.getElementsByClassName('project');


const cleanUpActiveOverlays = () => {
  Array.prototype.forEach.call(document.querySelectorAll('.project__overlay--active'), el => {
    el.classList.remove('project__overlay--active');
  })
}

Array.prototype.forEach.call(projectItems, item => {
  item.addEventListener('mouseenter', function () {
    cleanUpActiveOverlays();
    this.children[0].classList.add('project__overlay--active');
  });
  item.addEventListener('mouseleave', function () {
    this.children[0].classList.remove('project__overlay--active');
  })
});


export default {
  top: projectsContainer.offsetTop,
  bottom: projectsContainer.offsetTop + projectsContainer.offsetHeight,
  onEnter() {
    nav.setActive('projects');
    
  },
  onLeave() {
  }
};
