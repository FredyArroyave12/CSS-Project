// testimonail
$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [990, 2],
    itemsTablet: [768, 1],
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
      $('.nav-menu').removeClass('active');
      $('.hamburguer').removeClass('active');
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

hamburger.addEventListener('click', mobileTabMenu);

function mobileTabMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((element) => element.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

const contact = document.querySelector('.button2');

contact.addEventListener('click', visited);

function visited() {
  contact.classList.add('visited');
}

function resizeIframe(object) {
  object.style.height =
    object.contentWindow.document.documentElement.scrollHeight + 'px';
}

// paginas
$(document).ready(() => {
  let principalImage = $('.principal-images').offset().top;
  let descriptions = $('.top-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > principalImage &&
      $(window).scrollTop() < descriptions
    ) {
      $('#one').addClass('active');
    } else {
      $('#one').removeClass('active');
    }
  });
  //team JS
  let teamSection = $('.team-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > descriptions &&
      $(window).scrollTop() < teamSection
    ) {
      $('#two').addClass('active');
    } else {
      $('#two').removeClass('active');
    }
  });

  let portafolio = $('.gallery').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > teamSection &&
      $(window).scrollTop() < portafolio
    ) {
      $('#three').addClass('active');
      $('#four').addClass('active');
    } else {
      $('#three').removeClass('active');
      $('#four').removeClass('active');
    }
  });

  let blog = $('.blog-section').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > portafolio && $(window).scrollTop() < blog) {
      $('#five').addClass('active');
    } else {
      $('#five').removeClass('active');
    }
  });

  let form = $('.form-section').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > blog && $(window).scrollTop() < form) {
      $('#six').addClass('active');
    } else {
      $('#six').removeClass('active');
    }
  });

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > form) {
      $('#seven').addClass('active');
    } else {
      $('#seven').removeClass('active');
    }
  });
});
