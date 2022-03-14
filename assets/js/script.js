window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  const projects = document.querySelectorAll('.projects-list-link');
  for (let project of projects) {
    project.addEventListener('mouseenter', function(evt){
      if(evt.target.innerHTML === 'SparkleHeart') {
        document.querySelector('.projects-image').setAttribute('src', './assets/img/sparkle-heart-website.PNG');
      } else if (evt.target.innerHTML === 'Vinyl Owl') {
        document.querySelector('.projects-image').setAttribute('src', './assets/img/vinyl-owl-website.PNG');
      }
      evt.target
    });
  }
    
});