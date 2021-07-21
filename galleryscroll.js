$(document).ready(() => {
  const galleryOne = $('.gallery-one').offset().top;
  const galleryTwo = $('.gallery-two').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > galleryOne &&
      $(window).scrollTop() < galleryTwo
    ) {
      $('#single-portfolio-one').addClass('hoverActive');
    } else {
      $('#single-portfolio-one').removeClass('hoverActive');
    }
  });

  const galleryThree = $('.gallery-three').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > galleryTwo &&
      $(window).scrollTop() < galleryThree
    ) {
      $('#single-portfolio-two').addClass('actived');
    } else {
      $('#single-portfolio-two').removeClass('actived');
    }
  });

  const teamSection = $('.team-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > aboutSection &&
      $(window).scrollTop() < teamSection
    ) {
      $('#three').addClass('actived');
    } else {
      $('#three').removeClass('actived');
    }
  });

  const portafolio = $('.gallery').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > teamSection &&
      $(window).scrollTop() < portafolio
    ) {
      $('#four').addClass('actived');
    } else {
      $('#four').removeClass('actived');
    }
  });

  const blog = $('.blog-section').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > portafolio && $(window).scrollTop() < blog) {
      $('#five').addClass('actived');
    } else {
      $('#five').removeClass('actived');
    }
  });
  const contact = $('.contact-section').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > blog && $(window).scrollTop() < contact) {
      $('#six').addClass('actived');
    } else {
      $('#six').removeClass('actived');
    }
  });

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > contact && $(window).scrollTop() > blog) {
      $('#seven').addClass('actived');
    } else {
      $('#seven').removeClass('actived');
    }
  });
});
