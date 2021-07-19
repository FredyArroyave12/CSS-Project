// testimonail
$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [769, 2],
    itemsTablet: [567, 1],
    pagination: true,
    navigation: false,
    navigationText: ['', ''],
    slideSpeed: 1000,
    autoPlay: true,
  });
});

//acordeon
const block = document.querySelectorAll('.block');
const blockTitle = document.querySelectorAll('.block-title');

blockTitle.forEach((allHead, index) => {
  blockTitle[index].addEventListener('click', () => {
    block.forEach((allBlock, index) => {
      block[index].classList.remove('active');
    });
    block[index].classList.add('active');
  });
});
// sticky
$(document).ready(() => {
  let height = $('.menu').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > height) {
      $('.menu').addClass('menu-fixed');
    } else {
      $('.menu').removeClass('menu-fixed');
      //$('.nav-menu').removeClass('active');
      //$('.hamburguer').removeClass('active');
    }
  });
});

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach((item, index) => {
  navItem[index].addEventListener('click', () => {
    navItem.forEach((item, index) => {
      navItem[index].classList.remove('active');
    });
    navItem[index].classList.add('active');
  });
});

//nav
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((element) => element.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}
// visited
const contact = document.querySelector('.cta-contact');

contact.addEventListener('click', visited);

function visited() {
  contact.classList.add('visited');
}
