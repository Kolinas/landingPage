"use strict";

document.addEventListener('DOMContentLoaded', () => { 

const scroll = document.querySelector('.scrol-bt button'),
      team = document.querySelector('.team'),
      whatWeDo = document.querySelector('#weDo'),
      whatDo = document.querySelector('#whatDo'),
      testimonial = document.querySelector('#testimonial'),
      testimonialSec = document.querySelector('.tet-block'),
      contact = document.querySelector('#contact'),
      contactTo = document.querySelector('.cont-color');


function scrollTo (element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'

    });
}

scroll.addEventListener ('click',() => {
    scrollTo(team);
});

whatWeDo.addEventListener('click', () => {
    scrollTo(whatDo);
});

testimonial.addEventListener('click', () => {
    scrollTo(testimonialSec);
});

contact.addEventListener('click', () => {
    scrollTo(contactTo);
});

});



